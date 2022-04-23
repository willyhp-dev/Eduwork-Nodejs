const express = require("express");
const app = express();
const router = require("./route");
const log = require("./middleware/logger");
const res = require("express/lib/response");
const path = require('path');


app.use(log);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(__dirname, "uploads")));
app.use((req, res, next) => {
    
  res.status(404);
  res.send({
    status: "failed",
    message: "Resource" + req.originalUrl + " NotFound",
  });
});

app.listen(3000, () => console.log(`http://localhost:3000`));
