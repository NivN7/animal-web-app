import express from "express";

import { test, updateUser } from "../controllers/user-controller.ts";
import { verifyToken } from "../utils/verifyUser.ts";

const router = express.Router();

router.get("/test", test);
router.patch("/update/:id", verifyToken, updateUser);

export default router;
