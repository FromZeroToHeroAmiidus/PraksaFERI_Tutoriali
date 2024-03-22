const http = require("http");

const fs = require("fs");

const express = require("express");

// za express
const path = require("path");

// const homePage = fs.readFileSync("index.html");
// const aboutPage = fs.readFileSync("about.html");
// const contactPage = fs.readFileSync("contact.html");
// const notFoundPage = fs.readFileSync("notfound.html");

// const server = http.createServer((req,res) =>{
//     console.log(req.url);
//     if (req.url === "/about")
//         res.end(aboutPage)
//     else if (req.url === "/contact")
//         res.end(contactPage)
//     else if (req.url === "/")
//         res.end(homePage)
//     else {
//         res.writeHead(404);
//         res.end(notFoundPage);
//     }
// })

// server.listen(3000);

// da probamo express ... 
const app = express(); // calls express function to start new Express app
app.listen(3000,()=> {
    console.log("App listening on port 3000");
})

app.get('/about',(req,res)=>{
    res.json({
    name: 'Greg Lim'
    })
})

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"index.html"));
})