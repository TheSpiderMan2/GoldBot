const discord = require("discord.js");
const client = new discord.Client();
var express = require("express");
var app = express();
var http = require('http');
app.use(express.static("public"));

app.set("view engine", "ejs");

app.listen(88);
console.log("Done Open Gold Bot");


app.get("/", (req, res) => {
    res.render("index", {
        client: client
    });
});

app.get("/stats", (req, res) => {
    res.render("stats", {
        client: client
    });
});

app.get("/devs", (req, res) => {
    res.render("devs", {
        client: client
    });
});

app.get("/cmds", (req, res) => {
    res.render("cmds", {
        client: client
    });
});

client.on("ready", () => {
    console.log("Done Open Gold Bot")
})




client.login("NTYxMjU3MDU1OTIzNzMyNTEx.XLgmGA.CrebAPSXdgFKblpKE6w_QJH_IUg");