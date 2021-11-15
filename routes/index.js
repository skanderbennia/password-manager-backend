const express = require("express");
const router = express.Router();
const accountRouter = require("./accountRouter");
const groupeRouter = require("./groupeRouter");
const entryRouter = require("./entryRouter");
const userRouter = require("./userRouter");

router.use("/accounts", accountRouter);
router.use("/groupes", groupeRouter);
router.use("/entries", entryRouter);
router.use("/auth", userRouter);

module.exports = router;
