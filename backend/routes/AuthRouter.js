import express from "express";
const router = express.Router();
import { signupValidation, loginValidation } from "../middlewares/AuthValidation.js";
import { signup, login } from "../controllers/AuthController.js";

//frontend -> router -> middleware -> controller -> model -> database -> response
router.post("/login", loginValidation, login); 
router.post("/signup", signupValidation, signup);

export default router;