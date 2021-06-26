import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'

import {NamePrefs} from './NamePrefs'
import {ApertizerPrefs} from './ApertizerPrefs'
import {SoupPrefs} from './SoupPrefs'
import {DietPrefs} from './DietPrefs'
import {MainDishPrefs} from './MainDishPrefs'
import {AlcoholPrefs} from './AlcoholPrefs'
import {PigPrefs} from './PigPrefs'

const token = process.env.REACT_APP_API_SECRET

export const Prefs = () => {
    const [step, setStep] = useState('name-step')
    const [user, setUser] = useState(null)
    const [userInfo, setUserInfo] = useState({})
    const [highScoreDb, setHighScoreDb] = useState(0)

    useEffect(() => {
        if (user && user.length > 0) {
            axios.post(`http://localhost:5050/guests/user/${user}`, {token})
                .then(res => {
                    const result = res.data
                    const {message, highScore} = result
                    if (message === 'success') {
                        setUserInfo({})
                        setHighScoreDb(highScore)
                        console.log(highScore)
                        setTimeout(() => setStep('pig-step'), 250)
                    } else {
                        setTimeout(() => setStep('diet-step'), 250)
                    }
                })
        }
    }, [user])

    const addNewUser = () => {
        axios.post(`http://localhost:5050/guests/add`, {...userInfo, token})
            .then(res => console.log(res.data))
            .catch(err => alert('Niečo sa pokazilo a nepodarilo sa nahrať dáta do našej databázy. Skontrolujte si pripojenie a skúste to prosím znova.'))
    }

    return (
        <Container style={{backgroundColor: '#e0c8a0'}} className="py-4" fluid>
            {step === 'name-step' && <NamePrefs userInfo={userInfo} setUserInfo={setUserInfo} setUser={setUser} setStep={setStep} />}
            {step === 'diet-step' && <DietPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />}
            {step === 'apertizer-step' && <ApertizerPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />}
            {step === 'soup-step' && <SoupPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />}
            {step === 'main-dish-step' && <MainDishPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} />}
            {step === 'alcohol-step' && <AlcoholPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} addNewUser={addNewUser} />}
            {step === 'pig-step' && <PigPrefs highScoreDb={highScoreDb} token={token} user={user} setUser={setUser} setStep={setStep} />}
        </Container>
    )
}