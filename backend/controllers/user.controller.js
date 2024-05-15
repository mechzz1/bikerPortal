/**
 * User_Controller_Functions module
 * @module User_Controller_Functions
 */
/**
 * All functions for user data are in this file
 */

/**
 * user controller object exports functions in the controller file
 */
const userController = {};
/**
 * user service file import
 */
const UserService = require("../services/user.service.js");
/**
 * user service class object to access user services
 */
const userServiceObj = new UserService();
/**
 * including config file to access links
 */
const link = require("../config/url.js");
/**
 *including bcrypt library to encrypt password
 */
const bcrypt = require("bcryptjs");
const db = require("../models/index.js");
const { where } = require("sequelize");


userController.registerUser = async (req, res) => {
  try {
    const checkUser = await userServiceObj.findOne({
      where: {
        userName: req.body.userName,
      },
    })
    console.log(checkUser)
    if(!checkUser){
      req.body.password = bcrypt.hashSync(req.body.password, 8);
        const user = await userServiceObj.insertOrUpdate(req.body);
        res.status(200).send({
          code: 200,
          message: "User Registered Successfully",
          data: user,
        });
    }else{
      res.status(500).send({
        code: 500,
        error: "UserName Already in use !!",
      });
    }
 
  } catch (error) {
    console.log("error", error);
    return res.status(500).send(error);
  }
};

userController.loginUser = async (req, res) => {
  try {
    const user = await userServiceObj.loginUser(req.body);
   
    res.status(200).send({
      code: 200,
      message: "User Logged In Successfully",
      token: user,

    });
  } catch (error) {
    console.log(error.toString());
    return res.status(500).send(error.toString());
  }
};

userController.getUserInfo = async (req, res) => {
  try {
    const user = await userServiceObj.getUser({
      where:{
        id:req.userId
      }
    });
    res.status(200).send({
      code: 200,
      message: "User Logged In Successfully",
      data: user,

    });
  } catch (error) {
    console.log(error.toString());
    return res.status(500).send(error.toString());
  }
};



module.exports = userController;