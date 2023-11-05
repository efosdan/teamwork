const express = require('express');
const userRouter = express.Router(); 
const userController = require('../controller/user-controller.js');
const authorizationPass = require('../middleware/authorization.js');
const { validateSignupData, validateLoginData } = require('../middleware/validate.js');
const { getAllUserHandler,  registerHandler, loginHandler } = userController;




userRouter.get('/', authorizationPass, getAllUserHandler);

userRouter.post('/register', validateSignupData, registerHandler);

userRouter.post('/login', validateLoginData, loginHandler);


module.exports = userRouter;