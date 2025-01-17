const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = process.env.PORT || 3000
app.use(bodyParser.json());

app.post('/backend-api/conversation', (req, res) => {
  const message = req.body.message;
  console.log(message);
  //machne learning thingy
  res.json({
    output: "2 + 2 = 4"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})