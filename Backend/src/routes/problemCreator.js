
const express=require('express');
const problem = require('../models/problem');
const problemRouter=express.Router();
const {problemCreate,problemUpdate,problemDelete,getProblemById,getAllProblem ,getAllProblemSolvedByUser}=require('../controllers/userProblem');
const adminMiddleware = require('../middleware/adminMiddleware');
const userMiddleware = require('../middleware/userMiddleware');


//crud on the problem
problemRouter.post('/create',adminMiddleware,problemCreate);
problemRouter.patch('/:id',adminMiddleware,problemUpdate);
problemRouter.delete('/:id',adminMiddleware,problemDelete);

problemRouter.get('/:id',userMiddleware,getProblemById);
problemRouter.get('/getAllProblem',userMiddleware,getAllProblem);
problemRouter.get('/problemSolvedByUser',userMiddleware,getAllProblemSolvedByUser);


module.exports=problemRouter;