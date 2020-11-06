import User from '../models/User';
import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

export default class UsersController{
   async create (request: Request, response: Response){
  
    try{
  
      const { email} = request.body;  
    
        const createUser = new CreateUserService();
    
        const user = await createUser.execute({
          email,
        });
    
        return response.json(user);
    
     }catch(err){
       return response.status(400).json({ error: err.message});
     }
  
  }
}