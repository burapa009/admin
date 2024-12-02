import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(import.meta.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    throw new Error(`ไม่สามารถเชื่อมต่อกับ MongoDB ได้: ${error.message}`);
  }
};

export default connectDB; 