const express = require('express');
const router = express.Router();

const commentsCtrl = require('../controllers/comments');
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");

// Router

router.post('/post', commentsCtrl.post);

router.get('/all', commentsCtrl.getAll);

router.put('/modify', commentsCtrl.modify);

router.delete('/delete', commentsCtrl.delete)


module.exports = router;