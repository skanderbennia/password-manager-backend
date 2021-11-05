const express = require("express");
const router = express.Router();
const accountRouter = require("./accountRouter");
const groupeRouter = require("./groupeRouter");
const entryRouter = require("./entryRouter");

router.use("/accounts", accountRouter);
router.use("/groupes", groupeRouter);
router.use("/entries", entryRouter);

module.exports = router;
