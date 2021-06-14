import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'

import {NamePrefs} from './NamePrefs'
import {ApertizerPrefs} from './ApertizerPrefs'

export const Prefs = () => {
    const [step, setStep] = useState('step-name')
    return (
        <Container style={{backgroundColor: '#e0c8a0'}} className="py-4" fluid>
            {step === 'step-name' && <NamePrefs setStep={setStep} />}
            {step === 'apertizer-step' && <ApertizerPrefs setStep={setStep} />}
        </Container>
    )
}