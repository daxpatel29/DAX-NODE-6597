const {Router}=require("express")
const { getAddPlayerPage, getPlayersPage, createPlayer, getPlayerByUserId, getPlayers} = require("../controllers/product.controller")
const isAuth = require("../middlewares/auth")
const { upload } = require("../controllers/user.controller")

const ProductRouter=Router()

ProductRouter.get("/create",isAuth,getAddPlayerPage)
ProductRouter.get("/",isAuth,getPlayersPage)


ProductRouter.post("/",isAuth,upload.single("img"),createPlayer)
ProductRouter.get("/all",isAuth,getPlayers)
ProductRouter.get("/id",isAuth,getPlayerByUserId)

module.exports =ProductRouter