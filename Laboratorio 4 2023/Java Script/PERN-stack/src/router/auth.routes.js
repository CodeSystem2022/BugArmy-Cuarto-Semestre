import { Router } from "express";
import { signin, singup, singout, profile } from "../controllers/auth.controller.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", singup);

router.post("/signout", singout);

router.get("/profile", profile);

export default router;