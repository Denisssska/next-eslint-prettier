import mongoose from 'mongoose';

// Отключение strictQuery . в mongoose 7 отключено по умолчанию
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO as string);
  } catch (e) {
    throw new Error('Connection failed');
  }
};
export default connect;
