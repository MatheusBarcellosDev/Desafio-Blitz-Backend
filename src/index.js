require("dotenv").config();
const express = require("express");
require("express-async-errors");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.use((err, _req, res, _next) => {
  if (err) {
    res.status(400).send({
      error: err.message,
    });
  }

  return res.status(500).send({
    status: "Error",
    message: "Internal server error",
  });
});

app.listen(process.env.PORT || port, console.log(`Rodando na porta ${port}`));
