import { Router } from "express";
import testsController from "../controllers/tests.controller";
import { CreateTestSchema } from "../interfaces/models";
import verifyJwtHeader from "../middleware/auth/verifyJwtHeader";
import validateBody from "../middleware/validation/validateBody";

const router = Router();

router.use(verifyJwtHeader);

router.post("/tests", validateBody(CreateTestSchema), testsController.create);
router.get("/tests", testsController.getAllByDiscipline);
export default router;