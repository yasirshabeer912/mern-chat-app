const express = require("express");
const {
    sendMessage,allMessages
  } = require("../controllers/messageController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(authMiddleware, sendMessage);
router.route("/:chatId").get(authMiddleware, allMessages);


module.exports = router;