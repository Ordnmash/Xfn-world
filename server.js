const express = require("express");
const path = require("path");

const candlesRoute = require("./routes/candles");
const app = express();
const PORT = 3000;

// Static frontend
app.use(express.static(path.join(__dirname, "public")));

// Candles route
app.use("/candles", candlesRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});