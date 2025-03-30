const path = require('path');

const a=path.basename('C:\\temp\\myfile.html'); //returns the last part of the path
console.log(a);
const b=path.dirname('C:\\temp\\myfile.html'); //returns the directory name of the path
console.log(b); 

const c= path.basename('D:\\Node\\CodeWithHarry');
console.log(c); //returns the last part of the path
const d= path.dirname('D:\\Node\\CodeWithHarry');
console.log(d); //returns the directory name of the path

const a3 = path.extname(__filename)
console.log(a3); //returns the extension of the file
console.log(__filename,a3);
const a4 = path.extname(__dirname)
console.log(a4); //returns the extension of the directory name