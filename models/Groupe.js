const mongoose = require("mongoose");

const groupeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  accound_id: { type: mongoose.Schema.Types.ObjectID, ref: "account" },
});
const Groupe = mongoose.model("groupe", groupeSchema);
module.exports = Groupe;
