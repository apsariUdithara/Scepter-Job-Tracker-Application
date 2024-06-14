import { Router } from "express";
import {
  getCurrentUser,
  getapplicationStats,
  updateUser,
} from "../controllers/usercontroller.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getapplicationStats,
]);
router.patch("/update-user", validateUpdateUserInput, updateUser);

export default router;
