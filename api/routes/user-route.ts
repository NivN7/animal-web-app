import express from "express";

import {
  test,
  updateUser,
  deleteUser,
  getUserListings,
} from "../controllers/user-controller";
import { verifyToken } from "../utils/verifyUser";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", verifyToken, getUserListings);

export default router;
