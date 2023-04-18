const express = require('express');
require('dotenv').config();
const { connect } = require("./db/connection");
const favicon = require('serve-favicon');
const path = require('path')
const boardGameRouter = require("./routes/boardGameRoutes")
const PORT = process.env.PORT;
const app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));



app.get("/about",(req,res) =>{
    res.render("about",{ title:"About" })
})
app.use(boardGameRouter);

(async function () {
    await connect();

    app.listen(PORT, () => {
        console.log(`listening port ${PORT}`);
    });
})();

app.use((req,res)=>{
    res.status(404).render("404",{title: "Error 404"})
})