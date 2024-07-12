const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fistMod = require('./fistTryorder')
const delotMod = require('./delorders')
const sunsetbace = require('./sunsetbace')
const reprintbillMod = require('./reprintbill')
const askbillpris =  require('./askrepri')
const PORT = process.env.PORT || 5000 ;

const app = express()
app.use(cors())
app.use(express.json()) 

mongoose.set("strictQuery", false);

mongoose.connect("mongodb+srv://dagdidushyant:dagdidushyant@clusternew.ruhx4nn.mongodb.net/fistTryorders")
 
app.get('/getorderT1' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-1A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT2' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-2A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT3' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-3A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})  
app.get('/getorderT4' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-4A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT5' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-5A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT6' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-6A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT7' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-7A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT8' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-8A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT9' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-9A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.get('/getorderT10' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-10A'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT1B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-1B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT2B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-2B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT3B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-3B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT4B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-4B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT5B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-5B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})  
app.get('/getorderT6B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-6B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT7B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-7B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT8B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-8B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT9B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-9B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 
app.get('/getorderT10B' , (req,res) => {
    fistMod.find({Tnam : {$regex : 'T-10B'}})
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.get('/delorders' , (req,res) => {
    delotMod.find()
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.post('/delorders', (req , res)=> {
    delotMod.create(req.body)
    .then(delOrders => res.json(delOrders))
    .catch(err => res.json(err))
})

app.post('/orders', (req , res)=> {
    fistMod.create(req.body)
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.delete('/getallDelorderT1', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-1A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT2', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-2A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT3', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-3A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT4', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-4A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT5', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-5A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT6', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-6A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT7', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-7A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT8', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-8A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT9', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-9A'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT10', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-10A'}})
    res.send({datt: datt})
})
// New

app.delete('/getallDelorderT1B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-1B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT2B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-2B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT3B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-3B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT4B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-4B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT5B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-5B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT6B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-6B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT7B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-7B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT8B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-8B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT9B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-9B'}})
    res.send({datt: datt})
})
app.delete('/getallDelorderT10B', async (req , res)=> {
    const datt = await fistMod.deleteMany({Tnam : {$regex : 'T-10B'}})
    res.send({datt: datt})
})

app.delete('/getDelorder/:id', async (req , res)=> {
    const id = req.params.id
    const datt = await fistMod.deleteOne({_id : id})
    res.send({datt: datt})
})
app.delete('/sunsetbacedel/:id', async (req , res)=> {
    const id = req.params.id
    const datt = await sunsetbace.deleteOne({_id : id})
    res.send({datt: datt})
})


app.delete('/trynewadd/:newadd', async (req , res)=> {
    const newadd = req.params.newadd
    const datt = await reprintbillMod.deleteMany({Reid : newadd})
    res.send({datt: datt})
}) 


app.post('/sunsetbace', (req , res)=> {
    sunsetbace.create(req.body)
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})
app.get('/sunsetbaceget', (req , res)=> {
    sunsetbace.find()
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.post('/reprintbill', (req , res)=> {
    reprintbillMod.create(req.body)
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})
app.get('/reprintbillget', (req , res)=> {
    reprintbillMod.find()
    .then(orders => res.json(orders)) 
    .catch(err => res.json(err))
}) 

app.put('/getUpdate/:id', async (req , res)=> {
    const id = req.params.id
    fistMod.updateOne({_id:id} , {
        qut:req.body.qutorder
    })
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})
app.get('/askrepri', (req , res)=> {
    askbillpris.find()
    .then(askbill => res.json(askbill)) 
    .catch(err => res.json(err))
})
app.delete('/delreq', async (req , res)=> {
    const datt = await askbillpris.deleteMany()
    res.send({datt: datt})
})
app.get('/order' , (req,res) => {
    fistMod.find()
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
}) 

app.get('/' , (req,res) => {
    res.send("fdghethg")
}) 

app.listen(PORT, (req,res) => {
    console.log("started server")
})

app.put('/whyDel/:id', async (req , res)=> {
    const id = req.params.id
    fistMod.findByIdAndUpdate({_id:id} , {
        Onam:req.body.e
    })
    .then(orders => res.json(orders))
    .catch(err => res.json(err))
})

app.post('/ReqTable', (req , res)=> {
    askbillpri.create(req.body)
    .then(askpri => res.json(askpri))
    .catch(err => res.json(err))
})

app.delete('/deldellist', async (req , res)=> {
    const datt = await delotMod.deleteMany()
    res.send({datt: datt})
})
