const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const passport = require("./auth/passport");
const multer = require("multer");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const designsRouter = require("./routes/designs");
const productsRouter = require("./routes/products");
const designersRouter = require("./routes/designers");
const manufacturersRouter = require("./routes/manufacturers");
const materialsRouter = require("./routes/materials");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/images");
  },
  filename: (req, file, cb) => {
    let name = Date.now() + "-" + file.originalname;
    cb(null, name);
  }
});

const { seed } = require("./db/seed");
seed();

const app = express();

const sessionConfig = {
  secret: "NOT_A_GOOD_SECRET",
  resave: false,
  saveUninitialized: true
};

app.use(express.static(path.join(__dirname, "public")));
const upload = multer({
  storage: storage
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// vvv authentication stuff vvv
app.use(session(sessionConfig));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/productimg", upload.single('design_file'), designsRouter);
app.use("/api/designers", designersRouter);
app.use("/api/manufacturers", manufacturersRouter);
// app.use("/api/products", designsRouter);
app.use("/api/materials", materialsRouter);


module.exports = app;
