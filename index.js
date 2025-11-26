import express from 'express';
import fs from 'fs';
import csv from 'csv-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(cors());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const movies = [];

// Load CSV data on startup
fs.createReadStream('Latest 2025 movies Datasets.csv')
  .pipe(csv({
    mapHeaders: ({ header, index }) => {
      // Handle potential BOM or malformed header for the first column
      if (index === 0) return 'id';
      return header.trim();
    }
  }))
  .on('data', (row) => {
    movies.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    console.log(`Loaded ${movies.length} movies.`);
    
    // Start server only after data is loaded
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  });

app.get('/movies', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 100;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  if (endIndex < movies.length) {
    results.next = {
      page: page + 1,
      limit: limit
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit
    };
  }
  
  results.total = movies.length;
  results.totalPages = Math.ceil(movies.length / limit);
  results.currentPage = page;
  results.results = movies.slice(startIndex, endIndex);

  res.json(results);
});
