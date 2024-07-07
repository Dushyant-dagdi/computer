const mongoose = require("mongoose")

const sunsetbaceSch = new mongoose.Schema({
    Bnum:Number,
    Tnam:String,
    Amount:Number,
    Currtime:String,
    Onam:String,
    Reid:Number,
})

const sunsetbaceMod = mongoose.model("sunsetbace", sunsetbaceSch)
module.exports = sunsetbaceMod 