const express = require("express");
const app = express();
const Productrouter = require("./app/products/route");
//const Productrouterv2 = require("./app/product-v2/route");
// const log = require("./middleware/logger");
const logger = require("morgan");
const path = require("path");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(Productrouter);
//app.use(Productrouterv2);
app.use('/public',express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + " NotFound",
  });
});

app.listen(3000, () => console.log("Server: http:://localhost:3000"));
