const express=require('express');
const app=express.Router();
const {body,validationResult}=require('express-validator');
const InputString=require('../model/dbmodel');

app.use(express.text({defaultCharset:'utf8',type:'text/plain'}));

app.post('/',[body('').isString().exists()], async (req,res)=>{
	const errors=validationResult(req);
	
	if (!errors.isEmpty()){
			res.status(400).json({error:errors.array()[0].msg});
	}
	
	try{
    let myData=new InputString();
	myData.key = `${req.body}`;
	let item=await myData.save();
	res.send('saved '+item);
	} catch (err){
		res.status(400).send(err);
	}
	
});

module.exports=app;