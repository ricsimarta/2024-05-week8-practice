// import * as fs from 'node:fs'; // import
const fs = require('node:fs'); // same import, different syntax

/* try {
  const data = fs.readFileSync('file.json', 'utf8');
  console.log(data);
  const jsonData = JSON.parse(data);
  console.log(jsonData.key);
} catch (err) {
  console.log('Error reading the file:', err);
} */

fs.readFile('file.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  console.log(data);

  try {
    const jsonData = JSON.parse(data);
    console.log(jsonData.key);
  } catch (parseErr) {
    console.err('Error at parsing the data', parseErr);
  }
});