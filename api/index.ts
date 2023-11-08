import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.ts";
import userRouter from "./routes/user-route.ts";
import authRouter from "./routes/auth-route.ts";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL).then(() => {
      console.log("Connected to MongoDB!");
    });

    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
