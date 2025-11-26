import fs from 'fs';
import csv from 'csv-parser';

const movies = [];

fs.createReadStream('Latest 2025 movies Datasets.csv')
  .pipe(csv({
    mapHeaders: ({ header, index }) => {
      console.log(`Header [${index}]: '${header}' -> '${index === 0 ? 'id' : header.trim()}'`);
      if (index === 0) return 'id';
      return header.trim();
    }
  }))
  .on('data', (row) => {
    if (movies.length === 0) {
        console.log('First row raw:', row);
        console.log('First row keys:', Object.keys(row));
    }
    movies.push(row);
  })
  .on('end', () => {
    console.log('Done. Loaded', movies.length);
    process.exit(0);
  });
