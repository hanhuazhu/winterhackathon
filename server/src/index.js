const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgres://postgres:cBFvRbTsPjfVUUC@myhealthcare.internal:5432/prjdb');

const PORT = process.env.PORT || 8080;

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}

const userRouter = require('./v1/routes/userRouters.js');

const app = express();

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1', userRouter);

app.listen(PORT, () => {
    console.log(`API is open on port ${PORT}`);
});
