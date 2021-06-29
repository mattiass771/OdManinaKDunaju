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
            axios.post(`https://www.odmaninakdunaju.sk/guests/user/${user}`, {token})
                .then(res => {
                    const result = res.data
                    const {message, highScore} = result
                    if (message === 'success') {
                        setUserInfo({})
                        setHighScoreDb(highScore)
                        setTimeout(() => setStep('pig-step'), 250)
                    } else {
                        setTimeout(() => setStep('diet-step'), 250)
                    }
                })
        }
    }, [user])

    const addNewUser = (name, user, attend) => {
        axios.post(`https://www.odmaninakdunaju.sk/guests/add-user`, {name, user, attend, token})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    const updateUser = () => {
        axios.post(`https://www.odmaninakdunaju.sk/guests/add-attribute`, {...userInfo, token})
            .then(res => console.log(res.data))
            .catch(err => alert('Niečo sa pokazilo a nepodarilo sa nahrať dáta do našej databázy. Skontrolujte si pripojenie a skúste to prosím znova.'))
    }

    useEffect(() => {
        if (
            userInfo 
            && userInfo.name 
            && userInfo.user 
        ) {
            updateUser()
        }
    }, [userInfo])


    return (
        <Container style={{backgroundColor: '#e0c8a0'}} className="py-4" fluid>
            {step === 'name-step' && <NamePrefs userInfo={userInfo} setUserInfo={setUserInfo} setUser={setUser} setStep={setStep} addNewUser={addNewUser} />}
            {step === 'diet-step' && <DietPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} updateUser={updateUser} />}
            {step === 'apertizer-step' && <ApertizerPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} updateUser={updateUser} />}
            {step === 'soup-step' && <SoupPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} updateUser={updateUser} />}
            {step === 'main-dish-step' && <MainDishPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} updateUser={updateUser} />}
            {step === 'alcohol-step' && <AlcoholPrefs userInfo={userInfo} setUserInfo={setUserInfo} setStep={setStep} updateUser={updateUser} />}
            {step === 'pig-step' && <PigPrefs highScoreDb={highScoreDb} token={token} user={user} setUser={setUser} setStep={setStep} />}
        </Container>
    )
}