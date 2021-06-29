const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const apiToken = process.env.API_SECRET

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
  if(req.headers["x-forwarded-proto"] === "https"){
      return next();
  };
  if (req.hostname.includes('localhost')) {
    return next()
  }
  res.redirect('https://'+req.hostname+req.url);
});

app.use(
    cors({
      origin:true,
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      credentials: true,
      allowedHeaders: ['Content-Type','Access-Control-Allow-Origin','X-Requested-With']
    })
);

mongoose.connect(
    process.env.MONGO_URI_LATER,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true
    },
    (err) => {
      if (err) return console.log(err);
      return console.log("DB connection successful!");
    }
);

app.post('*', (req, res, next) => {
    const {token} = req.body
    if (token === apiToken) {
      return next()
    } else {
      console.log('Invalid authorization token!')
      return res.status(401).json({problem: 'Invalid authorization token!'})
    }
})

const guestsRouter = require("./guestsDb").router;
app.use(`/guests`, guestsRouter);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve(__dirname, "build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "build", "index.html"));
    });
}

const listener = app.listen(process.env.PORT || 5050, () => {
    console.log("Your app is listening on port " + listener.address().port);
});