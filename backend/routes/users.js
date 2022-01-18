const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users");
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");


// Router

router.post('signup', usersCtrl.signup);
router.post('login', usersCtrl.login);
router.post(':id', usersCtrl.getOne);

router.put('/option/:id', usersCtrl.option)

router.delete('/option/:id', usersCtrl.delete);


module.exports = router;