const mongoose = require("mongoose");
const router = require("express").Router();

const Schema = mongoose.Schema;

const guestsSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    allergies: { type: Array, required: true, default: [] },
    intolerances: { type: Array, required: true, default: [] },
    noMeat: { type: Boolean, required: true, default: false },
    meals: { type: Array },
    liquor: { type: Array },
});
  
const Guest = mongoose.model("Guest", guestsSchema);

router.route("/").post((req, res) => {
    Guest.find()
      .then((guests) => res.json(guests))
      .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add").post((req, res) => {
    const { name, email, allergies, meals, intolerances, noMeat, liquor } = req.body;
    const addGuest = new Guest({
        name,
        email,
        allergies,
        intolerances,
        noMeat,
        meals,
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