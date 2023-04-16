const BoardGame = require("../models/boardGame");
class BoardGameController {
    static async getBoardGames(req, res) {
        BoardGame.find().sort({ createdAt: -1 })
            .then((result) => {
                res.render('index', { title: 'Board Games', BoardGames: result });
            }).catch((error) => {
                console.log(error);
            })
    }
    static async addBoardGame(req, res) {
        const boardGame = new BoardGame(req.body);
        boardGame.save().then((result) => {
            res.redirect("/boardGames");
        }).catch((error) => {
            console.log(error);
        })
    }
    static async getBoardForm(req, res) {
        try {
            res.render("addBoardGame", { title: "Add Board Game" })
        } catch (error) {
            console.log(error);
        }
    }
    static async getBoardGame(req, res) {
        const boardGameId = req.params.id;
        BoardGame.findById(boardGameId)
        .then((result) => {
            res.render("boardGameDetails", { title: "Board Game Details", boardGame: result })
        }).catch((error) => {
            console.log(error);
        })
    }
    static async deleteBoardGame(req, res) {
        const boardGameId = req.params.id;
        BoardGame.findByIdAndDelete(boardGameId).then((result) => {
            res.json({ redirect: "/"})
        }).catch((error) => {
            console.log(error);
        })
    }
}

module.exports = BoardGameController