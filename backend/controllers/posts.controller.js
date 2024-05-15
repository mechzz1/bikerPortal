const PostController = {};
const PostsService = require("../services/posts.service.js");
const db = require('../models/index.js');

PostController.add = async (req, res) => {
      try {
            const category = await PostsService.insertOrUpdate(req.body);
            res.status(200).send({
                  code: 200,
                  message: "Category created Successfully",
                  data: category,
            });
      } catch (error) {
            console.log("error", error);
            return res.status(500).send(error);
      }
};



module.exports = PostController;
