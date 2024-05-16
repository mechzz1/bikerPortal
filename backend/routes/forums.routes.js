const express = require("express");

const router = express.Router();

const checkAuth = require("../middleware/verifyJwtToken");

const ForumController = require("../controllers/forum.controller");



router.post(
      "/add",
      [checkAuth.verifyToken],
      ForumController.add
);

router.post(
    "/getAll",
    [checkAuth.verifyToken],
    ForumController.getAll
);



module.exports = router;