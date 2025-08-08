require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser')
const main=require('./src/config/db');
const authRouter=require('./src/routes/userAuth');
const problemRouter=require('./src/routes/problemCreator')
const submitRouter=require('./src/routes/codeSubmit');
const redisClient = require('./src/config/redis');


const app = express();
app.use(express.json());
app.use(cookieParser()); 

app.get('/test', (req, res) => {
  res.send("Server is working!");
});

app.use('/user',authRouter);
app.use('/problem',problemRouter);
app.use('/submission',submitRouter)

const initailizeConnection=async ()=>{
    try{
        await  Promise.all([main(), await redisClient.connect()]);
        console.log("DB Connected");

         app.listen(process.env.PORT, () => {
         console.log(`Server is running at port no. ${process.env.PORT}`);

         });
    }
    catch(err){
        console.log("Error "+err);
    }
}
initailizeConnection();
