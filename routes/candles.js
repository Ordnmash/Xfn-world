// routes/candles.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const router = express.Router();

// Parse HistData date/time format: "YYYY.MM.DD,HH:MM"
function parseHistDataDate(dateStr, timeStr) {
  const [year, month, day] = dateStr.split(".").map(Number);
  const [hours, minutes] = timeStr.split(":").map(Number);

  return Math.floor(Date.UTC(year, month - 1, day, hours, minutes) / 1000);
}

router.get("/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const folderPath = path.join(__dirname, `../data/${symbol}`);

    // ✅ Get all CSV files inside the symbol folder (sorted by year)
    const files = fs.readdirSync(folderPath)
      .filter(f => f.endsWith(".csv"))
      .sort(); // e.g. 2020.csv, 2021.csv, ...

    if (files.length === 0) {
      return res.status(404).send("No CSV files found for symbol " + symbol);
    }

    const results = [];

    // Helper: read one file and push candles into results[]
    const readFile = (filePath) => {
      return new Promise((resolve, reject) => {
        fs.createReadStream(filePath)
          .pipe(csv({ headers: ["Date", "Time", "Open", "High", "Low", "Close", "Volume"] }))
          .on("data", (row) => {
            results.push({
              time: parseHistDataDate(row["Date"], row["Time"]),
              open: parseFloat(row["Open"]),
              high: parseFloat(row["High"]),
              low: parseFloat(row["Low"]),
              close: parseFloat(row["Close"]),
              volume: parseInt(row["Volume"], 10),
            });
          })
          .on("end", resolve)
          .on("error", reject);
      });
    };

    // ✅ Read all files sequentially
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      await readFile(filePath);
    }

    // ✅ Sort candles by time just in case
    results.sort((a, b) => a.time - b.time);

    console.log("Loaded candles:", results.length);
    res.json(results);

  } catch (err) {
    console.error("CSV read error:", err);
    res.status(500).send("Error reading CSV");
  }
});

module.exports = router;