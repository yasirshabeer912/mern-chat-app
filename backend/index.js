const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
var cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const  chats  = require('./data/data')
dotenv.config();

connectDB();
const app = express();
app.use(cors())
app.use(express.json());

app.use('/api/user',userRoutes)
app.get("/api/chats", (req, res) => {
    res.send(chats)
});

app.get("/", (req, res) => {
    res.send("API is running..");
});




const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));




