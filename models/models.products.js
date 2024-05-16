const mongoose = require("mongoose");

const myschema = mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true,
    }
});

const Detail= mongoose.model("Detail",myschema);

module.exports = Detail;
