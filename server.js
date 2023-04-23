const express = require("express");
const apiRoute = require("./routes/apiRoutes");
const htmlRoute = require("./routes/htmlRoutes");
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
const PORT = process.env.PORT || 8080;

// Sets up the Express app to serve static files and handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Points our server to a series of "route" files
app.use("/api",apiRoute);
app.use("/",htmlRoute);

//below starts our server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});