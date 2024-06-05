import { Router } from "express";
import { bookSubscription } from "../controllers/index.controller.js";

const router = Router();

router.post("/bookSubscription",bookSubscription)

export default router;