const mongoose = require("mongoose")

const reprintbillSch = new mongoose.Schema({
    Tnam:String,
    Onam:String,
    P:Number,
    qut:Number,
    Reid:Number, 
})

const reprintbillMod = mongoose.model("reprintbill", reprintbillSch)
module.exports = reprintbillMod 