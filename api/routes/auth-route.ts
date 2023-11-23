import express from "express";

import {
  google,
  signup,
  signin,
  signOut,
} from "../controllers/auth-controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut);

export default router;
