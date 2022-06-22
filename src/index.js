require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(process.env.PORT || port, console.log(`Rodando na porta ${port}`));
