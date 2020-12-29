import express from 'express'
import User from '../models/userModel.js';
import {users} from "../users.js"

const userRouter = express.Router();


userRouter.get('/seed', async(req,res) => {
    const createdUsers = await User.insertMany(users);
    res.send( {createdUsers} );
})

export default userRouter;