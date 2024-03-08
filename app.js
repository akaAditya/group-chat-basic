const express = require("express");
const bodyParser = require("body-parser");
const loginRouter = require("./auth/login");
const chatRouter = require('./chat/chat');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(chatRouter);

app.use("/", (req, res, next) => {
    res.status(404).send("<h1>Something went wrong</h1>");
});


app.listen(5000);
