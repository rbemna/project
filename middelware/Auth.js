const jwt = require("jsonwebtoken");
const User = require("../models/UserModel");
exports.isAuth = async (req, res,next) => {
    try {
        const token = await req.headers["authorization"];
        if (!token) {
            return res.status(400).send("not authorized 1");
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const { id } = decoded;
        const findUser = await User.findOne({ _id: id });
        if (!findUser) {
            return res.status(400).send("not authorized 2");
        }
        req.user = findUser;
    } catch (error) {
        res.status(400).send("not authorized");
    }
    next();
};

exports.providerAuth = async(req, res, next) => {
  const role= req.user.role   
    if (role != "Fournisseur") {
      res.status(401).json({ message: "vous n'êtes pas un fournisseur" });
    } else next();
  };

  exports.adminAuth = async(req, res, next) => {
    const { role } = req.user;
  
    if (role !="admin") {
      res.status(401).json({ message: "vous n'êtes pas un administrateur" });
    } else next();
  };