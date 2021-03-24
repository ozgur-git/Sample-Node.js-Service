const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/assignmentdb');

const nameSchema=new mongoose.Schema({
    key:String
});

const InputString=mongoose.model("inputstring",nameSchema);

module.exports=InputString;