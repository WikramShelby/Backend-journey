import express from 'express';
import user from '../models/users.js';

const router = express.Router();

router.post('/',async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const user = await user.create({name,email,password});
        res.status(201).json(user);
    }catch(error) {
        res.status(400).json({message : error.message});
    }
});

router.get('/',async(req,res)=>{
    try{
        const users = await user.find();
        res.json(users);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});

export default router;