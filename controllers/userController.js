const User = require("../models/User");

async function index(req, res) {
  try {
    const users = await User.all;
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ user });
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function show(req, res) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function update(req, res) {
  try {
    const user = await User.updateScore(req.params.id, req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function remove(req, res) {
  try {
    const user = await User.findById(req.params.id);
    const resp = await user.remove();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ err });
  }
}

module.exports = { index, show, create, remove };
