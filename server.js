const express = require("express"),
   bodyParser = require("body-parser"),
   cors = require("cors"),
   cookieParser = require("cookie-parser"),
   app = express(),
   port = process.env.PORT || 5009,
   pj = require("./config/config.json"),
   rateLimit = require("express-rate-limit"),
   session = require("express-session"),
   path = require("path");

process.env.SECRET_KEY = "secret2025xyz";
process.env.PF = "";

//3 requested per second
const limiter = rateLimit({
   windowMs: 1000, // 15 * 60 * 1000, // 15 minutes
   max: 5, // limit each IP to 100 requests per windowMs
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use(limiter);

app.use(
   session({
      secret: pj.global.cookie_secret,
      proxy: true,
      httpOnly: false,
      resave: pj.global.cookie_resave,
      saveUninitialized: pj.global.cookie_saveUninitialized,
      cookie: {
         secure: false,
         httpOnly: false,
         path: "/",
      },
   })
);

app.use(
   bodyParser.urlencoded({
      extended: false,
   })
);

var Import = require("./routes/ImportRoutes.js"),
   Captcha = require("./routes/CaptchaRoutes"),
   Lakes = require("./routes/LakesRoutes"),
   User = require("./routes/UserRoutes");

app.use("/import", Import);
app.use("/lakes", Lakes);
app.use("/user", User);
app.use("/captcha", Captcha);

// serve static assets if in production
if (process.env.NODE_ENV === "production") {
   // set static folder
   app.use(express.static("client/build"));

   app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
   });
}

app.listen(port, function () {
   console.log("Server is running on port: " + port);
});
