const express = require("express");
const bodyParser = require("body-parser");

const port = 3000 || process.env.PORT;

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
//WHY DOES THIS WORK?!?!?!
app.use("/public", express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");


app.use(routes);


app.listen(port, function() {
  console.log('Listening on port: ' + port)
});