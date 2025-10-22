// routes/candles.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const router = express.Router();

// Convert "YYYY.MM.DD" + "HH:MM" → UNIX time (seconds)
function parseHistDataDate(dateStr, timeStr) {
  const [year, month, day] = dateStr.split(".").map(Number);
  const [hours, minutes] = timeStr.split(":").map(Number);
  return Math.floor(Date.UTC(year, month - 1, day, hours, minutes) / 1000);
}

router.get("/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const folderPath = path.join(__dirname, `../data/${symbol}`);

    const files = fs.readdirSync(folderPath)
      .filter(f => f.endsWith(".csv"))
      .sort();

    if (files.length === 0) {
      return res.status(404).send(`No CSV found for ${symbol}`);
    }

    const results = [];

    // Helper: read file line-by-line
    const readFile = (filePath) => new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv({ headers: ["Date", "Time", "Open", "High", "Low", "Close", "Volume"] }))
        .on("data", row => {
          results.push({
            time: parseHistDataDate(row["Date"], row["Time"]),
            open: parseFloat(row["Open"]),
            high: parseFloat(row["High"]),
            low: parseFloat(row["Low"]),
            close: parseFloat(row["Close"]),
          });
        })
        .on("end", resolve)
        .on("error", reject);
    });

    // Read all yearly files sequentially
    for (const file of files) {
      await readFile(path.join(folderPath, file));
    }

    results.sort((a, b) => a.time - b.time);
    res.json(results);

  } catch (err) {
    console.error("CSV read error:", err);
    res.status(500).send("Error reading CSV");
  }
});

module.exports = router;