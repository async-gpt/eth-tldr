import mongoose from "mongoose";
import dotenv from "dotenv";
import { ConnectOptions } from "mongoose";

dotenv.config();

interface CustomMongoClientOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
}

const connectDB = async () => {
  const options: CustomMongoClientOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI!, options);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

export default connectDB;