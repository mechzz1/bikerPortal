const PostController = {};
const PostsService = require("../services/posts.service.js");
const db = require('../models/index.js');

PostController.add = async (req, res) => {
      try {
            req.body.userId = req.userId;
            const post = await PostsService.insertOrUpdate(req.body);
            res.status(200).send({
                  code: 200,
                  message: "Post created Successfully",
                  data: post,
            });
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};

PostController.getAll = async (req, res) => {
      try {
            const post = await PostsService.getAll({
                  include: {
                    model: db.User,
                    attributes: ['name'], // Specify the attributes you want to retrieve from the User model
                  },
                  order: [['createdAt', 'DESC']],
                });
            res.status(200).send({
                  code: 200,
                  message: "Post retrieve Successfully",
                  data: post,
            });
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};




module.exports = PostController;
