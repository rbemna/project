const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
exports.Register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await User.findOne({ email });
    if (findUser) {
      return res.status(400).send({
        errors: [{ msg: "user already exists" }],
      });
    }

    const newUser = new User({ ...req.body });
    // hashage
    const hashPwd = await bcrypt.hash(password, saltRounds);
    newUser.password = hashPwd;

    // creer token
    const token = jwt.sign(
      {
        id: newUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "3h" }
    );
    await newUser.save();
    res.send({ msg: "user registred", user: newUser, token });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "cannot register",
        },
      ],
    });
  }
};

exports.Login = async (req, res) => {
  try {
  
    const { email, password } = req.body;
    const findUser = await User.findOne({email });
  
    if (!findUser) {
      res.status(400).send({
        errors: [
          {
            msg: "bad credantiallllls",
          },
        ],
      });
    }
    
    const comparePwd = await bcrypt.compare(password, findUser.password);

    if (!comparePwd) {
      return res.status(400).send({
        errors: [
          {
            msg: "bad credantials",
          },
        ],
      });
    }
    const token = jwt.sign({ id: findUser._id }, process.env.SECRET_KEY, {
      expiresIn: "3h",
    });
    res.send({ message: "login successfully ", token, user: findUser });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "cannot login",
        },
      ],
    });
    console.log(error);
  }
};




exports.getUserProfile=async(req,res)=>{
  try {
    const getUser = await User.findById(req.user._id)

    if (getUser) {
      res.send({ message: "uset getted ", user: getUser });
      }
    
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "user not getted",
        },
      ],
    });
  }
}

exports.updateUserProfile = async (req, res) => {
  try {
    const { email } = req.user;
    const findUser = await User.findOne({ email });
    if (findUser) {
      const { _id } = findUser;

      await User.updateOne({ _id }, { $set: { ...req.body } });
      const { password } = req.body;
      if (password) {
        const hashPwd = await bcrypt.hash(password, saltRounds);
        findUser.password = hashPwd;
      }
    }
    await findUser.save();
    res.send({ message: "update successfully ", user: findUser });
  } catch (error) {
    res.status(500).send({
      errors: [
        {
          msg: "cannot update",
        },
      ],
    });
  }
};

exports.deleteUser=async (req, res) => {
  try {
       await User.findOne({_id:req.params.id})
        await User.deleteOne({ _id: req.params.id });

      res.status(200).send({msg:"deleted"});
  } catch (error) {
      console.log(error);
      res.status(500).send({ msg: "cannot find any user" });
  }}

exports.allProviders = async (req, res) => {
  try {
    const providers = await User.find({role:'Fournisseur'});
    res.send({msg:"liste des fournisseurs",providers});
  } catch (err) {
    console.error(err.message);
    res.status(500).send({msg:'Server Error'});
  }
};
exports.allClients = async (req, res) => {
  try {
    const clients = await User.find({role:'Client'});
    res.send({msg:"liste des clients", clients});
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
