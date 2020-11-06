import express from 'express';
import  UsersController  from "../controllers/UsersController";

const usersRouter = express.Router();

const usersController = new UsersController(); 

usersRouter.post('/email',usersController.create);

export default usersRouter;