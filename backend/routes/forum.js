const express = require('express');
const router = express.Router();

const forumCtrl = require('../controllers/forum');
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

// Router

router.post('/post', forumCtrl.post);

router.get('/all', forumCtrl.getAll);

router.put('/modify', forumCtrl.modify);

router.delete('/delete', forumCtrl.delete);

module.exports = router;
