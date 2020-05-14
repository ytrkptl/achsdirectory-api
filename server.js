const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");
const routes = require("./routes");
const app = express();

if (process.env.NODE_ENV !== "production") require("dotenv").config();

//middlewares
app.use(compression());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(routes);

// check .env file to see what port is being used.
const port = process.env.NODE_ENV || 3000;
app.listen(port, () => console.log(`app is running on port ${port}`));
