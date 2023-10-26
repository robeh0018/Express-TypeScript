import {Router} from "express";

/** Controller import */
import * as diaryController from "../controllers/diaries.controller";

/** Router initialization */
const router = Router();


/** Get */
router.get("/", diaryController.getEntries);

router.get("/:id", diaryController.getEntryById);

router.get("/non-sensitive", diaryController.getEntriesNonSensitive);

/** Post */
router.post("/", diaryController.addDiary);

/** Put */


/** Delete */

export default router;
