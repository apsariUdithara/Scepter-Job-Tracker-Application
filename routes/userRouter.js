import { Router } from "express";
import {
  getCurrentUser,
  getapplicationStats,
  updateUser,
} from "../controllers/usercontroller.js";
import { validateUpdateUserInput } from "../middleware/validationMiddleware.js";
import {
  authorizePermissions,
  checkForTestUser,
} from "../middleware/authMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getapplicationStats,
]);
router.patch(
  "/update-user",
  checkForTestUser,
  upload.single("avataruser"),
  validateUpdateUserInput,
  updateUser
);

export default router;
