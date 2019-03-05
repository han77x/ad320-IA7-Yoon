var express = require('express');
var router = express.Router();
var colors = require('../colors.json');

router.get("/:color-name", route2Callback);