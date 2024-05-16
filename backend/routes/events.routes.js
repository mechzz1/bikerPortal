const express = require("express");

const router = express.Router();

const checkAuth = require("../middleware/verifyJwtToken");

const EventsController = require("../controllers/events.controller");



router.post(
      "/add",
      [checkAuth.verifyToken],
      EventsController.add
);

router.post(
    "/getAll",
    [checkAuth.verifyToken],
    EventsController.getAll
);



module.exports = router;