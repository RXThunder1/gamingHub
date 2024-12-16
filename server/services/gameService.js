const { Game } = require("../models/Game");

async function getAllGames() {
  return await Game.findAll();
}

async function getGameById(id) {
  return await Game.findByPk(id);
}

async function createGame(gameData) {
  return await Game.create(gameData);
}

async function updateGame(id, gameData) {
  const game = await Game.findByPk(id);
  if (!game) throw new Error("Game not found");
  return await game.update(gameData);
}

async function deleteGame(id) {
  const game = await Game.findByPk(id);
  if (!game) throw new Error("Game not found");
  return await game.destroy();
}

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};