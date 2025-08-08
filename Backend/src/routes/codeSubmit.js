const express=require('express');
const userMiddleware = require('../middleware/userMiddleware');
const submitCode=require('../controllers/userSubmission');

const submitRouter=express.Router();


submitRouter.post('/submit/:id',userMiddleware, submitCode);

module.exports=submitRouter;