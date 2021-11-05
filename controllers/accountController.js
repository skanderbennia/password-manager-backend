const Account = require("../models/Account");
exports.getAllAccounts = async (req, res, next) => {
  try {
    const accounts = await Account.find({});
    res.status(200).json({
      data: accounts,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
exports.saveAccount = async (req, res, next) => {
  try {
    const masterPassword = req.body.masterPassword;
    const account = await Account.create({ masterPassword });
    res.status(201).json({
      data: account,
    });
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
exports.signin = async (req, res, next) => {
  try {
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
};
