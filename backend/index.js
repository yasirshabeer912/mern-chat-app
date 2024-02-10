const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const {chats} = require('./data/data')
dotenv.config();
connectDB();
const app = express();

app.use(express.json());


app.use("/api/chat",(req,res)=>{
    res.send(chats)
} );

  app.get("/", (req, res) => {
    res.send("API is running..");
  });




const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));




