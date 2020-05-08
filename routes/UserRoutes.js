const express = require("express"),
   users = express.Router(),
   cors = require("cors"),
   jwt = require("jsonwebtoken"),
   bcrypt = require("bcrypt"),
   path = require("path"),
   User = require("../models/User"),
   pj = require("../config/config.json");
(Logfn = require("../components/Logger")), (rf = require("./RoutFuctions"));
//const CircularJSON = require('flatted');

users.use(cors());

let ip = "0.0.0.0"; // install ip tracker
let tdate = Logfn.get_date();
let fileName = __filename.split(/[\\/]/).pop();

users.post("/login", (req, res) => {
   // display path of file

   if (
      req.body.password === pj.global.adminpassword &&
      req.body.email === pj.global.adminuser
   ) {
      // successful login
      let userObj = { email: req.body.email, password: req.body.password };
      let token = jwt.sign(userObj, process.env.SECRET_KEY, {
         expiresIn: 18000,
      });
      console.log("token issued: " + token);
      res.send({ token, tokenSuccess: true });
   } else {
      Logfn.log2db(
         500,
         fileName,
         "login password failed",
         req.body.email,
         "err",
         ip,
         req.headers.referer,
         tdate
      );
      console.log({
         authFail: "email/password combination not found",
      });
      res.json({
         tokenSuccess: false,
         authFail: "email/password combination not found",
      });
   }
});

users.post("/islogged", rf.verifyToken, (req, res) => {
   res.status(200).json(true).end();
   // if false rf.verifyToken will send response -> res.status(403)
});

users.post("/getusers", rf.verifyToken, (req, res) => {
   User.findAll({
      where: {
         isDeleted: 0,
      },
   })
      .then((data) => {
         //console.log(data)
         res.send(data);
      })
      .catch((err) => {
         Logfn.log2db(
            500,
            fileName,
            "getusers",
            "catch",
            err,
            ip,
            req.headers.referer,
            tdate
         );
         console.log("Client Error @ UserFunctions > get_users" + err);
         res.status(404).send("Error Location 102").end();
      });
});

module.exports = users;
