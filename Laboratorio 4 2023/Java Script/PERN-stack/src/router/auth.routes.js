import Router from "express-promise-router";
import { signin, singup, singout, profile } from "../controllers/auth.controller.js";
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/signin", signin);

router.post("/signup", singup);

router.post("/signout", singout);

router.get("/profile", isAuth, profile);

export default router;