const mongoose = require("mongoose");
const router = require("express").Router();

const Schema = mongoose.Schema;

const guestsSchema = new Schema({
    name: { type: String, required: true },
    user: { type: String, required: true },
    allergies: { type: Array, default: [] },
    intolerances: { type: Array, default: [] },
    apertizer: { type: String, default: '' },
    mainDish: { type: String, default: '' },
    soup: { type: String, default: '' },
    liquor: { type: String, default: '' },
    closed: { type: Boolean, default: false },
    highScore: { type: Number, default: 0 },
    attend: { type: String, default: '' },
});
  
const Guest = mongoose.model("Guest", guestsSchema);

router.route("/").post((req, res) => {
    Guest.find()
      .then((guests) => res.json(guests))
      .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/get-names").post((req, res) => {
    Guest.find()
      .then((guests) => {
            return guests.map(guest => {
                return {name: guest.name, user: guest.user}
            })
      })
      .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/user/:user").post((req, res) => {
    const {user} = req.params
    Guest.findOne({user: user})
        .then((guest) => (guest && (guest.closed || guest.attend === 'nepridem')) ? res.json({message: 'success', highScore: guest.highScore}) : res.json({message: 'not-found'}))
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

router.route("/add-user").post((req, res) => {
    const {name, user, attend} = req.body
    Guest.findOne({user: user})
        .then((guest) => {
            if (guest && guest.name) {
                return res.json('user exists')
            } else {
                const addGuest = new Guest({
                    name,
                    user,
                    attend
                });
                addGuest
                    .save()
                    .then(() => res.json(`Guest remembered!`))
                    .catch((err) => res.status(400).json(`Error: ${err}`));
            }
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

router.route("/add-attribute").post((req, res) => {
    const { allergies, apertizer, mainDish, soup, intolerances, liquor, user, closed } = req.body;
    Guest.findOne({user: user})
        .then((userFound) => {
            userFound.name = userFound.name
            userFound.user = userFound.user
            userFound.allergies = allergies || userFound.allergies
            userFound.apertizer = apertizer || userFound.apertizer
            userFound.mainDish = mainDish || userFound.mainDish
            userFound.soup = soup || userFound.soup
            userFound.intolerances = intolerances || userFound.intolerances
            userFound.liquor = liquor || userFound.liquor
            userFound.closed = closed || userFound.closed

            userFound
                .save()
                .then(() => res.json(`User data updated!`))
                .catch((e) => res.status(400).json(`Error: ${e}`));
        })
        .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = {
    router, 
    Guest
};