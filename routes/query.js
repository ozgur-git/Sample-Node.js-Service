const express=require('express');
const app=express.Router();
const InputString=require('../model/dbmodel');

const {query,validationResult}=require('express-validator');

app.get('/',[query('key').isString().exists()], async (req,res)=>{
	
	const errors=validationResult(req);
	
	if (!errors.isEmpty()){
			res.status(400).json({error:errors.array()[0].msg});
			return;
	}
	let myKey=req.query;
	
	await InputString.countDocuments(myKey).exec((err,count)=>{
        if (err){
            res.send(err);
            return;
        }
		
        if (count==0){
            res.send('count is '+0);
        } else {
        res.send(`count is ${count}`);
        }
	});
	
});

module.exports=app;