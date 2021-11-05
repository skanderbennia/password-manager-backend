const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const accountSchema = mongoose.Schema({
  masterPassword: String,
});

accountSchema.pre("save", async function (next) {
  console.log(this.masterPassword);
  for (let i = 0; i < 100; i++) {
    console.log(i);
    this.masterPassword = await bcrypt.hash(this.masterPassword, 12);
  }

  next();
});
// accountSchema.path("email").validate(function (email) {
//   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//   return emailRegex.test(email); // Assuming email has a text attribute
// }, "The e-mail field is not valid");
const Account = mongoose.model("account", accountSchema);
module.exports = Account;
