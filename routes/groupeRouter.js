const express = require("express");
const {
  getAllGroupe,
  createGroupe,
} = require("../controllers/groupeController");
const router = express.Router();

router.route("/").get(getAllGroupe).post(createGroupe);

module.exports = router;
