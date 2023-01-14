const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
require('dotenv').config();

const PORT = process.env.PORT || 5432;

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully')
  } catch (error) {
    console.error('Unable to connect to the database: ', error)
  }
}

const userRouter = require('./v1/routes/userRouters');

const app = express();

const test = async () => {
  await sequelize.sync({ force: true });
}

//test();

//middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/v1/user', userRouter);

app.listen(PORT, () => {
    console.log(`API is open on port ${PORT}`);
});
