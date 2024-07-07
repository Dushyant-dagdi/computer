const mongoose = require("mongoose")

const askbillprisSch = new mongoose.Schema({
    Tnam:String
})

const askbillprisMod = mongoose.model("askbillpris", askbillprisSch)
module.exports = askbillprisMod 