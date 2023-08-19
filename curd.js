const mongoose = require('mongoose');
const {Schema} = mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    }


})
module.exports=mongoose.model("table",MySchema)