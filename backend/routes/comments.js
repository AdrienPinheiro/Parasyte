const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

// Router



module.exports = router;