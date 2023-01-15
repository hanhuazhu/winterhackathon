const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

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
const biometricsRouter = require('./v1/routes/biometricsRouters');
const authRouter = require('./v1/routes/authRouters');

const app = express();

//middleware
app.use(cors());
app.use(express.json({ extended: false }));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/biometrics', biometricsRouter);
app.use('/api/v1/auth', authRouter);

app.listen(PORT, async() => {
  console.log(`API is open on port ${PORT}`);
  await sequelize.sync({ force: true });
});