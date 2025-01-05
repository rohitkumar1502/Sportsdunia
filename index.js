require("dotenv").config();
require("./configs/db");

const express = require('express');
const authRouter = require("./routes/authRoutes");
const authenticate = require("./middlewares/auth");
const collegeRouter = require("./routes/collegeRoutes");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.use('/auth', authRouter);
app.use(authenticate);

app.use('/', collegeRouter);

app.listen(PORT, () =>{
    console.log(`-------- App is listing in ${PORT} -----------`);
})