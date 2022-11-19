const express = require("express");
const path = require("path");
const connectDB = require("./config/db");
const Notes = require("./models/Notes");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const config = require("config");

const app = express();

// Connect to database
connectDB();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(
  express.urlencoded({
    extended: true,
    parameterLimit: 100000,
    limit: "500mb",
  })
);

app.use(express.json({ extended: false }));
app.use(express.static(path.join(__dirname, "/public")));

// Passport config
require("./config/passport")(passport);

// Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: config.get("mongoURI") }),
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Define Routes
app.use("/", require("./routes/index"));
app.use("/dashboard/note", require("./routes/note"));
app.use("/api/title", require("./routes/title"));
app.use("/dashboard/clear", require("./routes/clear"));
app.use("/dashboard/clear_codes", require("./routes/clear_codes"));
app.use("/api/delete", require("./routes/delete"));
app.use("/api/delete_code", require("./routes/delete_code"));
app.use("/dashboard/code", require("./routes/code"));
app.use("/api/update", require("./routes/update"));
app.use("/api/update_code", require("./routes/update_code"));
app.use("/auth", require("./routes/auth"));

const PORT = 5000;

app.listen(process.env.PORT || PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
