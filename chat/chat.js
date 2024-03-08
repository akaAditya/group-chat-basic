const express = require("express");
const fs = require("fs");

const router = express.Router();

const data = [];

router.get("/", (req, res, next) => {
  fs.readFile("chats.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chats are available";
    }

    res.send(
      `<html>
              <body>
              <h1>Chat Page</h1>
              <p>${data}</p>
              <form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action='/' method='POST'>
              <input type='text' id='message' name='message'>
              <input  id='username' name='username''>
              <button type='submit'>Submit</button>
              </form>
              </body>
              </html>`
    );
  });
});

router.post("/", (req, res, next) => {
  data.push(`${req.body.username} : ${req.body.message} - `);
  fs.writeFile(
    "chats.txt",
    `<>${req.body.username}: ${req.body.message}`,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/");
    }
  );
});

module.exports = router;
