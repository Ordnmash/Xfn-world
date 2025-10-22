// server.js
const express = require("express");
const path = require("path");
const candlesRoute = require("./routes/candles");

const app = express();
app.use(express.static(path.join(__dirname, "public"))); // your front-end files
app.use("/candles", candlesRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));