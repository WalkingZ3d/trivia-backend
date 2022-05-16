const Player = require("../models/Player");

async function getAll(req, res) {
  try {
    const players = await Player.all;
    res.status(200).json(players);
  } catch (err) {
    res.status(500).send(err);
  }
}

async function create(req, res) {
  try {
    const player = await Player.create(req.body);
    res.status(201).json(player);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function show(req, res) {
  try {
    const player = await Player.findById(req.params.id);
    res.status(200).json(player);
  } catch (err) {
    res.status(404).json({ err });
  }
}

async function update(req, res) {
  try {
    const player = await Player.updateScore(req.params.id, req.body);
    res.status(201).json(player);
  } catch (err) {
    res.status(422).json({ err });
  }
}

async function remove(req, res) {
  try {
    const player = await player.findById(req.params.id);
    const resp = await player.remove();
    res.status(204).end();
  } catch (err) {
    res.status(404).json({ err });
  }
}

module.exports = { getAll, create, show, update, remove };
