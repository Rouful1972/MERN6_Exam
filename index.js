const http = require("http");
const fs = require('fs');

const server = http.createServer(function(req, res) {

    if (req.url === "/") {
        res.end("This is Home page");
    }
    else if (req.url === "/about") {
        res.end("This is the About page");
    }
    else if (req.url === "/contact") {
        res.end("This is the Contact page");
    }
    else if (req.url === "/file-write") {
        async function CreateNewFile(){
            try{
                const data = await fs.writeFileSync('demo.txt','Hello World');
                console.log("Successfully Created.");
           }catch(e){
            console.log(e);
           }
           }     
       res.end("This is the File-Write page");
    }
    else {
        res.statusCode = 404;
        res.end("404 Not Found");
    }
});

server.listen(5501, function() {
    console.log("Server Running on Port 5501");
});
