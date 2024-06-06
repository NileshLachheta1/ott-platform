// import { Router } from "express";
// import { userRegistration } from "../controllers/user.controller.js";
// const router = Router();
// // router.post('/register', userRegistration);
// export { router };




import express from 'express'
import { registerUser, deactivateUsers, timeChange } from '../controllers/user.controller.js';
const router = express.Router();
router.post('/register', registerUser);
router.get("/timechange", timeChange)
router.use(deactivateUsers);

export default router;
