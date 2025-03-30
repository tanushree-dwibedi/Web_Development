const os = require('os');//here we dont write ./ because it is a built in module
console.log(os.freemem()); //free memory in bytes
console.log(os.homedir()); //home directory
console.log(os.hostname()); //hostname of the system
console.log(os.platform()); //platform of the system
console.log(os.release()); //release of the system
console.log(os.type()); //type of the system