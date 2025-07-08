// Task File System Operations
const fs = require('fs');

// create file 
fs.writeFileSync('welcome.txt', 'Hello Node');
console.log('welcome.txt file created successfully!');

// Read and console.log data from welcome.txt
try {
    const data = fs.readFileSync('welcome.txt', 'utf8');
    console.log('Content of welcome.txt:');
    console.log(data);
} catch (err) {
    console.error('Error reading file:', err);
}
