const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require("dotenv");
const database = require("./config/database")
const collection = require("./routes/search_endyear");
const objectcol = require("./routes/search_value");
const bodyparser = require('body-parser')


dotenv.config();

const PORT = process.env.PORT || 5000;

database.connect();

app.use(bodyparser.json())
app.use(express.json());
app.use(
  cors({
    origin:"*",
    credentials:true,
})
);

app.use("/collection",collection);
app.use("/objectc",objectcol);
app.get("/",(req,res) =>{
    return res.json({
        success:true,
        message:"your server is running at port no.."
    })
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
