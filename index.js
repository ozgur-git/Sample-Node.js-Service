const express=require('express');
const app=express();
const PORT=9000;


const input=require('./routes/input');
const query=require('./routes/query');

app.use('/input',input);
app.use('/query',query);

app.listen(PORT,(err)=>{
    if (err){
        console.log(err);
    }
    console.log(`listening on PORT ${PORT}`);
});