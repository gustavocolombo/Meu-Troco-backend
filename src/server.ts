import express from 'express';
import { createConnection } from 'typeorm';
import User from './models/User';
import routes from './routes/index';

const server = express();

createConnection();

server.use(express.json());
server.use(routes);

server.listen(3333, ()=>{
  console.log("Server started on port 3333");
})
