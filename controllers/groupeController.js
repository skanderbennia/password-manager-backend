const Groupe = require("../models/Groupe");
exports.getAllGroupe = async (req, res, next) => {
  try {
    const groupes = await Groupe.find();
    res.status(200).json({
      data: groupes,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
exports.createGroupe = async (req, res, next) => {
  try {
    const name = req.body.name;
    const groupe = await Groupe.create({
      name,
    });
    res.status(201).json({
      data: groupe,
    });
  } catch (err) {
    res.status(400).json(err);
  }
};
