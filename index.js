const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://vboyoung:1234@boilerplate.ee8fh.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useUnifiedTopology:true, 
    useCreateIndex:true, 
    useFindAndModify:false
})
.then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


