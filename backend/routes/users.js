const express = require('express');
const router = express.Router();

const usersCtrl = require("../controllers/users");


// Router

router.post('signup', usersCtrl.signup);
router.post('login', usersCtrl.login);
router.post('id', usersCtrl.getOne);
