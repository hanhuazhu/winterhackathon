const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URI);

const PORT = process.env.PORT || 8080;

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}

const userRouter = require('./v1/routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1', userRouter);

app.listen(PORT, () => {
    console.log(`API is open on port ${8080}`);
});