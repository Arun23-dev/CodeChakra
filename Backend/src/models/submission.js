const mongoose=require('mongoose')
const {Schema}=mongoose;

const submissionSchema= new Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    problemId:{
        type:Schema.Types.ObjectId,
        ref:'problem',
        required:true,
    },
    code:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:['pending','accepted','wrong','error'],
    },
    language:{
        type:String,
        required:true,
        enum:['c++','javascript','python']
    },
    runtime:{
        type:Number,  //milisecond
        default:0,
    },
    memory:{
        type:Number,
        default:0,
    },
    errorMessage:{
        type:String,
        default:'',

    },
    testCasePassed:{
        type:Number,
        default:0,
    },
    testCaseTotal:{
        type:Number,
        default:0,
    }

},
{ timestamps: true });

const Submission =mongoose.model('Submission',submissionSchema);
module.exports=Submission;
