var express = require("express");
var Gun = require("gun");
require('axe');

var app = express();
var port = process.env.PORT || process.argv[2] || 8765;

// app.use(cors({ origin: "*" })); // Enable any origin
app.use(Gun.serve);
app.use(express.static(__dirname));

var server = app.listen(port, () => {
  console.log(`Smallflatworld GUN relay server running at http://localhost:${port}/gun`)
})

var gun = Gun({	file: 'data', web: server });
