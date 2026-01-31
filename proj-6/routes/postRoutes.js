const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware/auth");
const postController = require("../controllers/postController");

router.get("/", ensureAuth, postController.listPosts);
router.get("/create", ensureAuth, postController.createPostForm);
router.post("/create", ensureAuth, postController.createPost);

module.exports = router;