const express = require('express');
const cors = require('cors');
const app = express()

app.use(express.json());
app.use(cors());

app.get("/api", (req, res) => {
    res.json({"working": "user1"})
})

app.listen(5000, () => {
    console.log("Server started...")
})