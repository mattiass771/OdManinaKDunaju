import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import chickenLeg from '../../icons/chicken-leg.png'
import stop from '../../icons/stop.png'
import like from '../../icons/like.png'
import risotto from '../../icons/risotto-alle-zucchine.jpg'
import duck from '../../icons/duck-sous.jpg'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

import Tooltip from '../Tooltip.jsx'

export const MainDishPrefs = ({setStep, setUserInfo, userInfo, updateUser}) => {
    const [mainDish, setMainDish] = useState('')
    const [goAway, setGoAway] = useState(false)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const handleAsyncUserInfo = async () => {
        setUserInfo({...userInfo, mainDish})
    }
    const leaveStep = () => {
        handleAsyncUserInfo().then(() => {
            setGoAway(true)
            setTimeout(() => setStep('alcohol-step'), 100)
        })
    }
    return (
        <Row className="text-center">
            <Col xs={12} md={6} lg={5} xl={{span: 3, offset: 1}}>
                <motion.div 
                    className="icon-small mb-4"
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('right', -1200)} 
                >
                    <Image className="icon-image-small" src={chickenLeg} alt="chicken-leg" fluid />
                </motion.div>
            </Col>
            <Col xs={{span: 10, offset: 1}} md={5} lg={6}>
                <motion.div 
                    style={{backgroundColor: 'rgba(0,0,0,0.0)'}}
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('left', 1200)} 
                >   
                    <article>
                        <h4>
                            Hlavné jedlo
                        </h4>
                        <p>
                            Zahajujeme sezónu kačacích hodov! Nejedného hosťa určite potešia famózne <strong>Kačacie prsia sous-vide</strong>, 
                            ktoré sama nevesta deň vopred pochytala vo svojich svadobných šatách. (Reklama na prací prášok?)
                            <Tooltip url="https://www.youtube.com/watch?v=_cPoOXLyL00" text="Ak nechápeš, klikni sem." />
                            Pre nemäsových jedincov máme samozrejme v ponuke výborné <strong>Cuketové rizoto</strong>!
                        </p>
                    </article>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="duck"
                                    src={duck}
                                    className={mainDish === 'duck' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: mainDish === 'duck' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setMainDish('duck')}                                    
                                />
                                <Figure.Caption style={{color: mainDish === 'duck' ? '#894937' : '#333333'}}>
                                    Kačacie prsia sous-vide, pyré z červenej kapusty, brusnicová omáčka
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="risotto-alle-zucchine"
                                    src={risotto}
                                    className={mainDish === 'risotto-alle-zucchine' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: mainDish === 'risotto-alle-zucchine' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setMainDish('risotto-alle-zucchine')}
                                />
                                <Figure.Caption style={{color: mainDish === 'risotto-alle-zucchine' ? '#894937' : '#333333'}}>
                                    Cuketové rizoto, píniové oriešky, parmezán
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <br />
                    {mainDish ? 
                        <Button variant="dark" onClick={() => leaveStep()}>
                            Pokračujeme.
                            <Image style={iconStyles} src={like} />
                        </Button>
                        :
                        <Button variant="dark" disabled>
                            Vyber si predjedlo.
                            <Image style={iconStyles} src={stop} />
                        </Button>
                    }
                </motion.div>
            </Col>
        </Row>
    )
}