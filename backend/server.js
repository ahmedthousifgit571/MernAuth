const express = require("express");
const errorHandler = require("./middleware/errorMiddleware");
const colors = require("colors");
const dotenv = require("dotenv").config();
const cors = require('cors')
const connectDB = require("./config/db");
const port = process.env.PORT || 8000;

connectDB();

const app = express();

app.use(cors({
    origin:"http://localhost:3000",
    methods:"GET, POST, PUT ,DELETE, PATCH",
    credentials:true
}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`server runs on port: ${port}`));
