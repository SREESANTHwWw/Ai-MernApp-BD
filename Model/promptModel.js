const mongoose = require("mongoose")


const PromptSchem = new mongoose.Schema({

    prompt:{
        type:String,
        require:true,
    
    },
    response:{
        type:String,
    }
},{timestamps:true})

module.exports = mongoose.model("Prompt" ,PromptSchem)