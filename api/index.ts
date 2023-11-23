import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";

import connectDB from "./db/connect";
import userRouter from "./routes/user-route";
import authRouter from "./routes/auth-route";
import listingRouter from "./routes/listing-route";
import { errorHandlerMiddleware } from "./utils/error";
import path from "path";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cookieParser());

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use(errorHandlerMiddleware);

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
