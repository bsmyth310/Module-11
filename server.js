// Import express package
const express = require("express");
const fs = require("fs");

var app = express();
var PORT = process.env.PORT || 3000

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});