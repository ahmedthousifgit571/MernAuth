const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));
app.listen(port, () => console.log(`server runs on port: ${port}`));
