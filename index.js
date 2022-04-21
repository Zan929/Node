
const express = require('express')
const app = express()
const path = require('path')

const fs = require('fs')

app.use(express.static(path.join(__dirname, '/src/static')))

app.get('/sendForm',(req, res) =>{
  
  
const oldContent = fs.readFileSync('data.json',{encoding:'utf-8'})
const proceedData = JSON.parse(oldContent);
proceedData.push(req.query)
const newData = JSON.stringify(proceedData, null , 2)
fs.writeFileSync('data.json' , newData)
res.send('ok')
})
app.get('/getComments' ,(req,res) =>{
  const readJSON = fs.readFileSync('data.json' ,{encoding:'utf-8'});
  const proceedData = JSON.parse(readJSON);
  res.json( proceedData )
})


app.listen(80)
