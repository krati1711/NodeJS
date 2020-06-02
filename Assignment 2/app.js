const express = require("express");

const app = express();

/*app.use("/function1", (req, res, next) => {
    console.log("Function 1");
    res.send("<h1> Its function 1 </h1>");
});*/

/*app.use("/function2", (req, res, next) => {
    console.log("Its function 2");
});*/

app.use('/users', (req, res, next) => {
    console.log('User Function!');
    res.send('<h1>From the user function</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Default Function!');
    res.send('<h1>From the default function</h1>');
});

app.listen(4000)