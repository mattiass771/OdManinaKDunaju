import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import glutenFree from '../../icons/gluten.png'
import like from '../../icons/like.png'

import Row from 'react-bootstrap/Row'
import InputGroup from 'react-bootstrap/InputGroup'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {GoDiffAdded} from 'react-icons/go'
import {VscDiffRemoved} from 'react-icons/vsc'

import Tooltip from '../Tooltip.jsx'

export const DietPrefs = ({setStep, setUserInfo, userInfo, updateUser}) => {
    const [allergy, setAllergy] = useState('')
    const [diet, setDiet] = useState('')
    const [allergyArray, setAllergyArray] = useState([])
    const [dietArray, setDietArray] = useState([])
    const [goAway, setGoAway] = useState(false)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const handleAsyncUserInfo = async () => {
        setUserInfo({...userInfo, allergies: allergyArray, intolerances: dietArray})
    }
    const leaveStep = () => {
        handleAsyncUserInfo().then(() => {
            setGoAway(true)
            setTimeout(() => setStep('apertizer-step'), 250)
        })
    }
    const handleAllergy = () => {
        if (allergy && allergy.length > 0) {
            setAllergyArray([...allergyArray, allergy])
            setAllergy('')
        }
    }
    const handleDiet = () => {
        if (diet && diet.length > 0) {
            setDietArray([...dietArray, diet])
            setDiet('')
        }
    }
    const showAllergies = () => {
        return allergyArray.map((el, i) => {
            return <span key={`${el}-${i}`} style={{marginLeft: '5px'}}>{el} <VscDiffRemoved style={{cursor: 'pointer'}} onClick={() => setAllergyArray(allergyArray.filter(val => val !== el))} /></span>
        })
    }
    const showDiets = () => {
        return dietArray.map((el, i) => {
            return <span key={`${el}-${i}`} style={{marginLeft: '5px'}}>{el} <VscDiffRemoved style={{cursor: 'pointer'}} onClick={() => setDietArray(dietArray.filter(val => val !== el))} /></span>
        })
    }
    const handleKeyPress = (event, type) => {
        if (event.key === 'Enter') {
            switch(type) {
                case 'aller': 
                    return handleAllergy()
                case 'diet':
                    return handleDiet()
                default: return;
            }
        }
    }
    return (
        <Row className="text-center">
            <Col xs={12} md={6} lg={5} xl={{span: 3, offset: 1}}>
                <motion.div 
                    className="icon-small mb-4"
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('right', -1200, goAway ? 0.5 : 0)} 
                >
                    <Image className="icon-image-small" src={glutenFree} alt="gluten-free" fluid />
                </motion.div>
            </Col>
            <Col xs={{span: 10, offset: 1}} md={5} lg={6}>
                <motion.div 
                    style={{backgroundColor: 'rgba(0,0,0,0.0)'}}
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('left', 1200, goAway ? 0.5 : 0)} 
                >   
                    <article>
                        <h4>
                            Účasť potvrdená, ďakujeme
                        </h4>
                        <h5>
                            V následujúcich krokoch si vyber, čo chceš konzumovať.
                        </h5>
                        <p>
                            V prvom rade by sme ťa poprosili, aby si tu vyplnil tvoje diétne preferencie. 
                            Napíš po jednom na čo máš alergiu alebo intoleranciu a za každou ingredienciou stlač tlačítko plus, 
                            alebo proste stlač ENTER. <Tooltip url="https://www.youtube.com/watch?v=RLtkufY62A4" text="Malý návod pre počítačové talenty tu." />
                            Tieto preferencie zohľadníme následne, keby nám nesedeli do jedálnička, budeme ti volať a dohodneme sa.
                        </p>
                    </article>
                    <Row>
                        <Col xs={12} sm={6} md={12} lg={6}>
                            <Form.Group>
                                <Form.Label>Alergie:</Form.Label>
                                <InputGroup className="mb-2">
                                    <Form.Control
                                        spellCheck="false"
                                        type="text" 
                                        value={allergy}
                                        onChange={(e) => setAllergy(e.target.value)}
                                        onKeyPress={(e) => handleKeyPress(e,'aller')}
                                    />
                                    <Button onClick={() => handleAllergy()} variant="dark" style={{borderRadius: '0px', border: '1px solid #894937'}}>
                                        <GoDiffAdded />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col xs={12} sm={6} md={12} lg={6}>
                            <Form.Group>
                                <Form.Label>Intolerancie:</Form.Label>
                                <InputGroup className="mb-2">
                                    <Form.Control
                                        spellCheck="false"
                                        type="text" 
                                        value={diet}
                                        onChange={(e) => setDiet(e.target.value)}
                                        onKeyUp={(e) => handleKeyPress(e,'diet')}
                                    />
                                    <Button onClick={() => handleDiet()} variant="dark" style={{borderRadius: '0px', border: '1px solid #894937'}}>
                                        <GoDiffAdded />
                                    </Button>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3" style={{fontSize: '125%'}}>
                        <Col>
                            {allergyArray && showAllergies()}
                            {dietArray && showDiets()}
                        </Col>
                    </Row>
                    {allergyArray.length === 0 && dietArray.length === 0 ?
                        <Button variant="dark" onClick={() => leaveStep()}>
                            Nemám žiadne diéty.
                            <Image style={iconStyles} src={like} />
                        </Button> :
                        <Button variant="dark" onClick={() => leaveStep()}>
                            Môžme pokračovať.
                            <Image style={iconStyles} src={like} />
                        </Button>
                    }
                </motion.div>
            </Col>
        </Row>
    )
}