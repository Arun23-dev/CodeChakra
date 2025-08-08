const User=require('../models/user');
const problem=require('../models/problem');
const Submission=require('../models/submission')
const {getLanguageById,submitBatch,submitToken}=require('../utils/problemUtility');
const { getProblemById } = require('./userProblem');

const submitCode=async(req,res)=>{
    try{
        const userId=req.result._id;
        const problemId=req.params.id;
        const {code,language}=req.body;


        if(!userId || !problemId || !code || !language )
        {
            return res.status(400).send("some field missing ");
        }
        //fetch the problem for knowing the testcase hidden
        const fetchedProblem= await problem.findById(problemId)
        console.log(fetchedProblem);
        const submittedResult=await Submission.create({
            userId,
            problemId,
            code,
            language,
            testCasePassed:0,
            status:'pending',
            testCaseTotal:fetchedProblem.hiddenTestCases.length,
        })
            const languageId=getLanguageById(language); 

            const submissions=fetchedProblem.hiddenTestCases.map((testcases,index)=>({
                source_code:code,
                language_id:languageId,
                stdin:testcases.input,
                expected_Output:testcases.output,

            }));
            const submitResult=await submitBatch(submissions);

            const tokenResult=  submitResult.map((value)=>value.token);

            const testResult= await submitToken(tokenResult);

            //db update  of the submitted result

            let testCasePassed=0;
            let runtime=0;
            let memory=0;
            let status='accepted';
            let errorMessage='';

            for(const test  of testResult)
            {
                    if(test.status_id===3)
                    {
                        testCasePassed=testCasePassed+1;
                        runtime=runtime+parseFloat(test.time);
                        memory=Math.max(memory,test.memory);

                    }
                    else{
                        if(test.status_id===4){
                                status='error';
                                errorMessage=stderr;
                        }
                        else{
                             status='wrong';
                             errorMessage=stderr;
                        }
              
                    }
            }
            submittedResult.testCasePassed=testCasePassed;
            submittedResult.status=status;
            submittedResult.runtime=runtime;
            submittedResult.memory=memory;
            submittedResult.errorMessage=errorMessage;


            await submittedResult.save();

           if( !req.result.problemSolved.includes(problemId))
           {
            req.result.problemSolved.push(problemId);
            await req.result.save();
           }

        res.status(201).json({
            message: "Submission processed successfully",
            submission: submittedResult
        });

    }
    catch(err)
    {
            res.status(400).send('Error '+err);
    }
}
module.exports=submitCode;