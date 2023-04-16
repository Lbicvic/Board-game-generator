const express = require("express");
const BoardGameController = require("../controllers/boardGameController");
const boardGameRouter = express.Router();

boardGameRouter.get("/boardGames", BoardGameController.getBoardGames);
boardGameRouter.get('/addBoardGame', BoardGameController.getBoardForm);
boardGameRouter.get('/boardGames/:id', BoardGameController.getBoardGame);
boardGameRouter.post('/boardGames', BoardGameController.addBoardGame);
boardGameRouter.delete('/boardGames/:id', BoardGameController.deleteBoardGame);
module.exports = boardGameRouter;