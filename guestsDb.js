const mongoose = require("mongoose");
const router = require("express").Router();

const Schema = mongoose.Schema;

const guestsSchema = new Schema({
    name: { type: String, required: true },
    user: { type: String, required: true },
    allergies: { type: Array, required: true, default: [] },
    intolerances: { type: Array, required: true, default: [] },
    noMeat: { type: Boolean, required: true, default: false },
    apertizer: { type: String },
    mainDish: { type: String },
    soup: { type: String },
    liquor: { type: String },
    highScore: { type: Number }
});
  
const Guest = mongoose.model("Guest", guestsSchema);

router.route("/").post((req, res) => {
    Guest.find()
      .then((guests) => res.json(guests))
      .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/user/:user").post((req, res) => {
    const {user} = req.params
    Guest.findOne({user: user})
        .then((guest) => guest ? res.json({message: 'success', highScore: guest.highScore}) : res.json({message: 'not-found'}))
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/update-highscore/:user").post((req, res) => {
    const { highScore } = req.body;
    const { user } = req.params
    Guest.findOne({user: user})
        .then((userFound) => {
            userFound['highScore'] = highScore
            userFound
                .save()
                .then(() => res.json(`User highScore updated!`))
                .catch((e) => res.status(400).json(`Error: ${e}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
    const { name, allergies, apertizer, mainDish, soup, intolerances, noMeat, liquor, user } = req.body;
    const addGuest = new Guest({
        name,
        user,
        allergies,
        intolerances,
        noMeat,
        apertizer,
        mainDish,
        soup,
        liquor,
    });
    addGuest
    .save()
    .then(() => res.json(`Guest remembered!`))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = {
    router, 
    Guest
};