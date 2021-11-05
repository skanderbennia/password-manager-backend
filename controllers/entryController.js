const Entry = require("../models/Entry");

exports.getAllEntries = async (req, res, next) => {
  try {
    const entries = await Entry.find();
    res.status(200).json({
      data: entries,
    });
  } catch (err) {
    req.status(400).json(err);
  }
};

exports.createEntry = async (req, res, next) => {
  try {
    const password = req.body.password;
    const app = req.body.app;
    const entry = await Entry.create({ app, password });
    res.status(201).json({
      data: entry,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
