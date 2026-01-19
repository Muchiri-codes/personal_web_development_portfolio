import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGODB_URI!;

export const connectDB = async () =>{
  try {
    if(mongoose.connection.readyState >=1) return;
    await mongoose.connect(MONGO_URI);
    console.log("Data base connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}
