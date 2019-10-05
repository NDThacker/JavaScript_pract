const express = require('express');
//const exported = require('./exportpract');
const app = express();
console.log(app.get);
app.listen(8080);

app.use("/", (req, res, next) => {
	console.log("server hit");
	console.log(req);
	res.send("Hellow");
})

