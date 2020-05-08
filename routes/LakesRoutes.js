const express = require("express"),
   lakes = express.Router(),
   cors = require("cors"),
   Details = require("../models/Details"),
   Logfn = require("../components/Logger"),
   Sequelize = require("sequelize"),
   db = require("../database/db"),
   rf = require("./RoutFuctions");

lakes.use(cors());

let ip = "0.0.0.0"; // install ip tracker
let tdate = Logfn.get_date();
let fileName = __filename.split(/[\\/]/).pop();

lakes.post("/get_lakes", rf.verifyToken, (req, res) => {
   // display path of file
   Details.findAll()
      .then((lakes) => {
         res.send(lakes);
      })
      .catch((err) => {
         Logfn.log2db(
            500,
            fileName,
            "could not get lakes",
            "catch err",
            err,
            ip,
            req.headers.referer,
            tdate
         );
         res.json({ error: __filename + ".get_lakes error-> " + err });
         console.log({ error: __filename + ".get_lakes error-> " + err });
      });
});

module.exports = lakes;
