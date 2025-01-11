const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

app.use(bodyParser.json());
app.use(cors());

let CountrySchema = new mongoose.Schema({
    country:String,
    title:String,
    image:String,
    description:String

})
let CountryModel =  mongoose.model("country",CountrySchema)

app.get("/country",async (req,res)=>{
    let countrys = await CountryModel.find()
    res.send(countrys)
})
app.get("/country/:id",async (req,res)=>{
    let {id}=req.params
    let country = await CountryModel.findById(id)
    res.send({
        data:country
    })
})
app.delete("/country/:id", async (req,res)=>{
    let {id} = req.params
    await CountryModel.findByIdAndDelete(id)
    res.send({
        message:"deleted"
    })
})
app.post("/country", async (req,res)=>{
    let newCountry = CountryModel(req.body)
    await newCountry.save()
    res.send({
        message: "Success Post",
        data: req.body
    })
})

mongoose
  .connect("mongodb+srv://ebrutbaf206:code206@af206.floug.mongodb.net/")
  .then(() => {
    console.log("connected");
  });
app.listen(3000, () => {
  console.log("300 portunda calisir");
});
