import express from 'express'
import User from '../models/userModel';
import {users} from "../users"

const userRouter = express.Router();


userRouter.get('/seed', async(req,res) => {
    const createdUsers = await User.insertMany(users);
    res.send({ createdUsers });
})