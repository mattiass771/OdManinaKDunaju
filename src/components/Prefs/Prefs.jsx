import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'

import {NamePrefs} from './NamePrefs'
import {ApertizerPrefs} from './ApertizerPrefs'
import {SoupPrefs} from './SoupPrefs'
import {DietPrefs} from './DietPrefs'
import {MainDishPrefs} from './MainDishPrefs'

export const Prefs = () => {
    const [step, setStep] = useState('name-step')
    return (
        <Container style={{backgroundColor: '#e0c8a0'}} className="py-4" fluid>
            {step === 'name-step' && <NamePrefs setStep={setStep} />}
            {step === 'diet-step' && <DietPrefs  setStep={setStep} />}
            {step === 'apertizer-step' && <ApertizerPrefs setStep={setStep} />}
            {step === 'soup-step' && <SoupPrefs setStep={setStep} />}
            {step === 'main-dish-step' && <MainDishPrefs setStep={setStep} />}
        </Container>
    )
}