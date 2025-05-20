const express = require("express");
const engine = require("ejs-mate");
const app = express();

app.use(express.static('public'));


app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get("/",(req,res) => {
    res.render("portfolio/home");
});

app.get("/skills",(req,res) => {
    res.render("portfolio/skills");
});

app.get("/portfolio",(req,res) => {
    res.render("portfolio/portfolio");
});



app.listen(3000,() => {
    console.log("ポート3000でリクエスト待受中…");
});