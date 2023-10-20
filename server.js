const express = require('express')
const dotenv = require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000
app.use(express.json())
app.use("/api/contents", require("./routes/contactRoutes"))

app.listen(port, ()=>{
    console.log(`server running on port ${port}`)
})