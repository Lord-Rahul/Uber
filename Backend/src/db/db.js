import mongoose from "mongoose";

const DB_NAME = "Uber";

const connectToDB = async () => {
  try {
    const connectionString = `${process.env.DB_CONNECT}${DB_NAME}`;
    console.log('Connecting to:', connectionString);
    const connectionInstance = await mongoose.connect(connectionString);
    console.log(
      `\n mongo db connected !! DB Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection error", error);
    process.exit(1);
  }
};

export default connectToDB;
