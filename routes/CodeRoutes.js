const express = require("express"),
   code = express.Router(),
   Sequelize = require("sequelize"),
   db = require("../database/db"),
   cors = require("cors"),
   c = require("../config/config.json"),
   Logfn = require("../components/Logger"),
   rf = require("./RoutFuctions");

code.use(cors());

code.post("/get_tables", rf.verifyToken, (req, res) => {
   db.sequelize
      .query("SHOW TABLES")
      .then((data) => {
         res.json({ success: true, data: data });
      })
      .catch((err) => {
         console.log("Err CodeRoutes.get_tables" + err);
         Logfn.log2db(
            500,
            fileName,
            "could SHOW TABLES",
            "catch err",
            err,
            ip,
            req.headers.referer,
            tdate
         );
         res.json({ success: false, data: "na", err: err });
      });
});

code.post("/get_columns", rf.verifyToken, (req, res) => {
   db.sequelize
      .query("SHOW COLUMNS FROM " + req.body.table)
      .then((data) => {
         res.json({ success: true, data: data });
      })
      .catch((err) => {
         console.log("Err CodeRoutes.get_tables" + err);
         Logfn.log2db(
            500,
            fileName,
            "could SHOW COLUMNS",
            "catch err",
            err,
            ip,
            req.headers.referer,
            tdate
         );
         res.json({ success: false, data: "na", err: err });
      });
});

module.exports = code;
