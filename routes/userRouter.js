import { Router } from "express";
import {
  getCurrentUser,
  getapplicationStats,
  updateUser,
} from "../controllers/usercontroller.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", getapplicationStats);
router.patch("/update-user", updateUser);

export default router;
