const fs = require('fs');


fs.readFile('file.txt', 'utf8', (err, data) => {
    // if (err) {
    //     console.error(err);
    //     return;
    // }
    // console.log(data);
    console.log(err,data);
}
);

const a = fs.readFileSync('file.txt');
console.log(a.toString()); // this will run before the readFile function because it is asynchronous

console.log("Finished");// this will run before the readFile function because it is asynchronous


fs.writeFile('file2.txt', 'Hello World!', (err) => {
    // if (err) throw err;
    console.log('The file has been saved!');
  })

  b = fs.writeFileSync('file3.txt', 'Hello World!');
  console.log(b);//undefined // this will run before the writeFile function because it is synchronous