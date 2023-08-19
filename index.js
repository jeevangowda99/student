const express =require('express')
const {Hello,Hello1,add,sub,mul,div,Total} = require('./demo');
const connectToMongo =require('./db')
const MySchema =require('./curd')
const app =express();
app.use(express.json());
app.use('/api/student',require('./router/studentRouter'))




app.get('/first',(req,res)=>{
    console.log("your first API has been  called");
    res.send("This is my First API call");
})
app.get('/one',(req,res)=>{
    const time =new Date().toLocaleTimeString()
    const date =new Date().toLocaleDateString()
    res.send(`Today time ${time}, Today date ${date} `)
    console.log('Todays time and date')

})


app.post('/api/insert',async(req,res)=>{
    try{
        const {name, email, phone, address } = req.body;
        const data = new MySchema({name, email, phone, address});
        const savedData = await data.save();
        console.log("Insertion successfully")
        res.send({"Insertion success":true,savedData})

    }
    catch(error){
        console.error("some error occured"+error);
        res.status(500).json("some internal error!!!")
    }

})



port=7000;
Hello()
Hello1("Jeevan")
add()
sub()
mul()
div()
Total()
connectToMongo()

app.listen(port,()=>{
    console.log("app is listening on port number "+port);
console.log(`app is listening on port number ${port}`);

})