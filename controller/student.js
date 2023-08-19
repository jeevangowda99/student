const { json } = require('express');
const studentSchema = require('../model/studentSchema');
const MySchema = require('../model/studentSchema');
const Insert =async(req,res)=>{
    try{
        const{name,email,phone,address,age,} = req.body;

        let checkphone = await studentSchema.findOne({phone});
        if(checkphone){
            console.log("Phone number alredy exists! tyy with  another number");
            return res.status(400).json({errors:"Phone number alredy exists1"});
        }
        else{
            const data =  await new MySchema({name,email,phone,address,age})
            const savedStudent =  await data.save();
            console.log("Insertion Successfully")
            res.send({"Insertion Success":true,savedStudent})
        }



       
    }
    catch(error){
        console.error("some error occureed"+error)
        res.status(500).json("some intrnal erroe!!!")
    }
}

const View = async(req,res)=>{
    try{
        const data = await MySchema.findById(req.params.id);
        if(!data){
            console.log = ( "data not found with this ID");
            return res.status(404).send("data dose not exists with this ID!")
        }
        else{
        console.log(data)
        res.json(data)
    }
}
    catch(error){
        console.error("some error occureed"+error)
        res.status(500).json("some intrnal erroe!!!")
    }
    }
    const Delete = async(req,res)=>{
        try{
            let data = await studentSchema.findById(req.params.id);
            if(!data){
                console.log("Data not found with this ID");
                return res.status(404).send("Data does not exists with this ID!");

            }
            else{
                data = await studentSchema.findByIdAndDelete(req.params.id);
                console.log("Data deleted sucessfully...");
                res.json({"success":true, "Deleted Data":data})
            }

        }
        catch(error){
            console.error("some error occureed"+error)
        res.status(500).json("some intrnal erroe!!!")


        }
    }

    const Update = async (req,res)=>{
        const { name, email, phone, address, age} = req.body
        try{
            const newData={}
            if(name){newData.name=name}
            if(email){newData.email=email}
            if(phone){newData.phone=phone}
            if(address){newData.address=address}
            if(age){newData.age=age}
            let data = await MySchema.findById(req.params.id);
            if(!data){
                console.log("Data not found with this Id");
                
                return res.status(404).send("data does not exists with this ID!")
            }
            else{
                data = await MySchema.findByIdAndUpdate(req.params.id,{$set:newData});
                console.log("Update data : " + data)
                res.json({data});
            }

        }
        catch(error){
            console.error("some error occureed"+error)
        res.status(500).json("some intrnal erroe!!!")

        }
    }
    const Register = async(req,res)=>{
        try{
        const{name, email, address, phone, age, password} = req.body;
        let checkemail = await MySchema.findOne({email});
        if(checkemail){
            console.log("email is alerdy exists!, try with another email");
            return res.status(400).json({error:"email is alredy exists!!!"})
        }
        else{
             const data = await new MySchema({name, email, address, phone, age, password});
             const savedData = await data.save();
             console.log("Registeration successful..");
             res.send({"Registeration success..":true,savedData});

        }
        }
        catch(error){
            console.error("some error occureed "+error);
            res.status(500).json("some intrnal error !!!")

        }
    }

module.exports={Insert,View,Delete,Update,Register};