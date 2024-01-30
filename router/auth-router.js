import express  from "express";
const router = express.Router();
import {hireCandidate, scheduleMeeting}  from '../controllers/auth-controllers.js';


router.route("/hire-candidate").get(hireCandidate);

router.route("/sheduleMeeting").post(scheduleMeeting);

export default router;