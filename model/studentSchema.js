const mongoose = require('mongoose');
const {Schema} = mongoose;
const MySchema = new Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    age:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true,
    }
})
module.exports = mongoose.model("student",MySchema)