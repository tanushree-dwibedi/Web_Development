const http = require('http');

const port = process.env.PORT || 3000; // Use the port from environment variables or default to 3000

const server = http.createServer((req, res) => {
    
  
    res.setHeader('Content-Type', 'text/plain'); // Set the response content type to plain text
    console.log(req.url); // Log the request URL to the console
    if(req.url=='/'){
        res.statusCode = 200; // Set the response status code to 200 (OK)
        res.end('<h1> This is CodeWithHarry</h1> <p> Hey this is the way to rock the world!</p>'); // Send the response body
    }
   else if(req.url=='/about'){
    res.statusCode = 200; // Set the response status code to 200 (OK)
        res.end('<h1> about CodeWithHarry</h1> <p> Hey this is about  the world!</p>'); // Send the response body
    }
    else{
      //  res.harry()//this will give an error
        res.statusCode = 404; // Error
        res.end('<h1> Not Found</h1> <p> Hey this page was not found on this server!</p>'); // Send the response body
   
    }
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`); // Log the server URL to the console
})