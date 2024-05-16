require('dotenv').config()
const express = require("express");
const mongoose = require('mongoose');
const Detail = require('./models/models.products.js');
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

// Connecting to MongoDB
mongoose.connect(process.env.CONNECTION_STRING)
  .then(() => console.log('Connected! to MongoDB'))
  .catch((error)=>{ console.log(error) });


// Get Products 
app.get("/",async(req,res)=>{
    // res.send("Hello World!");
    try{
           const allUsers = await Detail.find({});
           res.status(200).json(allUsers);

    }catch{
        res.status(500).json({"message":error.message});
    }
});

// Upload Details to database 
app.post("/upload",async(req,res)=>{
    try{
     const Info = await Detail.create(req.body);
     res.status(200).json(Info);

    }catch(error){
        res.status(500).json({"message":error.message})
    }
});

//Udpate the Details to Database 
app.put("/update/:id",async(req,res)=>{
    const {id} = req.params;
    try{
           const upadatedInfo = await Detail.findByIdAndUpdate(id,req.body);
           res.status(200).json(upadatedInfo);
    }catch(error){
        res.status(500).json({"message":error.message});
    }
})

app.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params;
    try{
        const deletedInfo = await Detail.findByIdAndDelete(id);
        res.status(200).json(deletedInfo);

    }catch(error){
        res.status(500).json({"message":error.message});
    }

})



app.listen(port,()=>{
    console.log(`Server Listensing @ ${port}`)
})


