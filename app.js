const express = require("express");
const app = express();
port = 8080;
const path = require("path");
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/project",(req,res)=>{
    res.render("project");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

app.get("/home",(req,res)=>{
    res.render("index");
})
app.use(express.urlencoded({ extended: true }));
app.post("/contact/resp",(req,res)=>{
    res.render("resp",{formData: req.body});
})

app.listen(port , () => {
    console.log(`listening on port ${port}`);
})