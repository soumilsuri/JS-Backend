const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/js', (req, res)=>{
    res.send('han bhai express sikhi ja ri')
})

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})