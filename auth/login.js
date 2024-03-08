const express = require("express");

const router = express.Router();

router.get("/auth/login", (req, res, next) => {
  res.send(
    `<html>
        <body>
            <h1>Login Page</h1>
            <form onsubmit="localStorage.setItem('username', document.getElementById('username').value)" action='/auth/login' method='POST'>
            <input type='text' id='username' name='username'>
            <button type='submit'>Submit</button>
        </form>
        </body>
    </html>`
  );
});

router.post("/auth/login", (req, res, next) => {
  res.redirect("/");
});

module.exports = router;
