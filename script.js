import express from "express";


// import jsdom from "jsdom";
// const dom = new jsdom.JSDOM("");
// import jQuery from "jquery" dom.window;

// const express = require("express");

// const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );



const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/aboutUs", (req, res) => {
  res.render("aboutUs.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

