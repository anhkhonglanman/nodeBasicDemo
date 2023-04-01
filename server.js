
const express = require('express')
const app = express()
const port = 8080


// routing website
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send(`tokyo hot`)
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})