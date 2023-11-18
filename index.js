const path = require("path");
const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const helmet = require("helmet");

const { mongoConnect } = require("./services/mongoDB");

const app = express();
const PORT = process.env.PORT || 5000;

//logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(helmet());
app.use(express.json());

// connect database
mongoConnect();

const options = {
  extname: ".hbs",
  layoutsDir: "views/layouts/",
  defaultLayout: "main",
};

const handlebarsInstance = exphbs.create(options);

app.engine(".hbs", handlebarsInstance.engine);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "views", "layouts"));

app.get("/", (req, res) => {
  res.render("main", {
    title: "My Todo Demo App",
    content: "This app was created with love and expectations!",
  });
});

app.use("/api", require("./routes/routes"));

app.listen(
  PORT,
  console.log(
    `The server is running at ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
