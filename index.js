const { query } = require('express')
const express = require('express')
const req = require('express/lib/request')
const { fstat } = require('fs')
const app = express()
const path = require('path')



app.use(express.static(path.join(__dirname, '/src/static')
  )
)
app.get('/sendForm',(req, res) =>{
  console.log(req.query)
  
const oldContent = fs.readFileSync('data.json',{encoding:'utf-8'})
console.log(ondContent)
oldData = JSON.parse(oldContent);
console.log(oldData)
res.send('ok')

  // fs.open('data.json','w' , function (err, file) {
  //   console.log('Saved!');
  // })
  res.send('OK')
 
})


app.get('/getComments', (req,res) => {
 
 res.send("OK")
})


// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.listen(80)
