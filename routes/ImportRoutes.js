const express = require("express"),
   importcsv = express(),
   cors = require("cors");
//const CircularJSON = require('flatted');

importcsv.use(cors());

//importcsv.post('/csv', rf.verifyToken, (req, res) => {

module.exports = importcsv;
