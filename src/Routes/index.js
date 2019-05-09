import { Router } from "express";
const router = Router();

function mainPage(req, res) {
    res.send("Welcome to my API");
}

router.get("/", mainPage);

export default router;
