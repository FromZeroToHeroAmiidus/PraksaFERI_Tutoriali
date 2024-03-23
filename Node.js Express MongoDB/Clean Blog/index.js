// serrver ole
const express = require("express");

const app = new express();

const path = require("path");

const ejs = require('ejs')
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs')
// tega ni v knigi
//app.set('views', path.join(__dirname, 'views'))
// ^ tega ni v knigi

app.use(express.static("public"));

//app.use(express.static(__dirname + '/views/'));
//app.set('views', path.join(__dirname, 'views')); 

app.listen(4000, ()=>{
    console.log("App listening on port 4000");
})

// app.get("/",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"pages/index.html"));
// })

// app.get("/about",(req,res)=>{
//     console.log(req);
//     res.sendFile(path.resolve(__dirname,"pages/about.html"));
// })

// app.get("/contact",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"pages/contact.html"));
// })

// app.get("/post",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"pages/post.html"));
// })

// gremo prej templating engina EJS in sicer nov nacin :
// pred tem smo pages preimenovali v views in index.html v index.ejs

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
   // console.log(req);
   // res.sendFile(path.resolve(__dirname,"pages/about.html"));
   res.render('about');
})

app.get("/contact",(req,res)=>{
   // res.sendFile(path.resolve(__dirname,"pages/contact.html"));
   res.render("contact");
})

app.get('/post',(req,res)=>{
    //res.sendFile(path.resolve(__dirname,'pages/post.html'))
    res.render('post')
    })


 