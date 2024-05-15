const express = require("express");

const router = express.Router();

const checkAuth = require("../middleware/verifyJwtToken");

const PostController = require("../controllers/posts.controller");



router.post(
      "/add",
      [checkAuth.verifyToken],
      PostController.add
);

router.post(
    "/getAll",
    [checkAuth.verifyToken],
    PostController.getAll
);



module.exports = router;