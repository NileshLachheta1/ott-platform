// import { Router } from "express";
// import { userRegistration } from "../controllers/user.controller.js";
// const router = Router();
// // router.post('/register', userRegistration);
// export { router };




import express from 'express'
import { registerUser, deactivateUsers,timeChange } from '../controllers/user.controller.js';

const router = express.Router();

// Register a new user
router.post('/register', registerUser);
router.get("/timechange",timeChange)

// Middleware to deactivate users after 4 hours
router.use(deactivateUsers);

export  default router;
