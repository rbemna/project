const express=require("express");
const router=express.Router();
const {registerValidator,loginValidator, validation} =require("../middelware/userValidator")
const {isAuth,adminAuth} =require ("../middelware/Auth")
const {Register, Login,updateUserProfile,deleteUser,allProviders,allClients } =require("../controllers/userController")



router.post("/register", registerValidator(), validation,Register );
router.post("/login", loginValidator(), validation, Login);
router.get("/current", isAuth, (req, res) => {
    res.send({ msg: "get user successfully", user: req.user });
});
router.put("/edit",isAuth, updateUserProfile);
router.delete('/:id',isAuth,adminAuth,deleteUser)
router.get("/providers",isAuth,adminAuth,allProviders)
router.get("/clients",isAuth,adminAuth,allClients)
module.exports=router