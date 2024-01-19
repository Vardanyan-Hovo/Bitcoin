import mongoose from "mongoose";


global.mongoose = {
  conn: null,
  promise: null,
};

//Connect MongoDb with mongoose
export async function DbConnect() {
  try {
    if (global.mongoose && global.mongoose.conn) {
      console.log("Connected from previous");
      return global.mongoose.conn;
    } else {
      const conString = process.env.MONGO_URL;

      console.log("process.env.MONGO_URL=" + process.env.MONGO_URL);
      const promise = mongoose.connect(conString, {
        autoIndex: true,
      });

      global.mongoose = {
        conn: await promise,
        promise,
      };

      console.log("Newly connected");

      return await promise;
    }
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
}

export const Disconnect = () => {
  if (!global.mongoose.conn) {
    return;
  }
  global.mongoose.conn = null;
  mongoose.disconnect();
};
