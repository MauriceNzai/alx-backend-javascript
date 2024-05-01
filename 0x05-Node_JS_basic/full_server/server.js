const express = require('express');

const router = require("./routes/index.js");

const app = express();

//app.use(router);
app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Listening on Port ${port}`));


module.exports = app;
