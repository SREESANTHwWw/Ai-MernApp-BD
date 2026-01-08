const express = require("express")
const promptModel = require("../Model/promptModel")

const Router = express.Router()


Router.post("/savePrompt",async(req,res)=>{
    try {
        const {prompt,response} = req.body

        if(!prompt|| !response){
            return res.status(400).json({msg:"Prompt And Response is missing"})
        }

        const data = promptModel.create({
           prompt,response
        })
        if(!data){
            return res.status(400).json({msg:"Saving Failed"})
        }

        res.status(200).json({data:data,msg:"Saved Successfully"})

        
    } catch (error) {
        console.log(error);
        
        
    }
})

Router.get("/getAll", async (req, res) => {
  try {
    const prompts = await promptModel.find({});

    if (prompts.length === 0) {
      return res.status(404).json({
        message: "No data found",
        data: [],
      });
    }

    res.status(200).json({
      message: "Data fetched successfully",
      data: prompts,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
});


module.exports = Router