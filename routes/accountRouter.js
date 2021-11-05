const express = require("express");
const {
  getAllAccounts,
  saveAccount,
} = require("../controllers/accountController");
const router = express.Router();

router.route("/").get(getAllAccounts).post(saveAccount);

module.exports = router;
