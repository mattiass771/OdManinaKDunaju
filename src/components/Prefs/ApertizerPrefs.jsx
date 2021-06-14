import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import diet from '../../icons/diet.png'
import stop from '../../icons/stop.png'
import like from '../../icons/like.png'
import cherryTomatoSalad from '../../icons/cherry-tomato-salad.jpg'
import foieGras from '../../icons/foie-gras.jpg'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

export const ApertizerPrefs = ({setStep}) => {
    const [aper, setAper] = useState('')
    const [goAway, setGoAway] = useState(false)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const leaveStep = () => {
        setGoAway(true)
        setTimeout(() => setStep('soup-step'), 100)
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
                    <Image className="icon-image-small" src={diet} alt="diet" fluid />
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
                            Krok 2 - Predjedlo
                        </h4>
                        <p>
                            Kto si dá predjedlo? Všetci. Alebo ako by Attila povedal, "šetkyyy". 
                            Na výber je kačacie <strong>Foie Gras</strong> pre mäsožrútov a na svoje si prídu aj 
                            tí, čo mäso v láske nemajú. Čo dostaneme ak sa dajú dokopy Mozarta a Cinderella (Popoluška)?
                            No predsa <strong>Mozzarella</strong>! (Mozzapuška vraj nieje nič moc.)
                        </p>
                    </article>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="foie-gras"
                                    src={foieGras}
                                    className={aper === 'foie-gras' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: aper === 'foie-gras' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAper('foie-gras')}                                    
                                />
                                <Figure.Caption style={{color: aper === 'foie-gras' ? '#894937' : '#333333'}}>
                                    Foie Gras, marhuľové chutney, brioche
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="cherry-tomato-salad"
                                    src={cherryTomatoSalad}
                                    className={aper === 'mozzarella-salad' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: aper === 'mozzarella-salad' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAper('mozzarella-salad')}
                                />
                                <Figure.Caption style={{color: aper === 'mozzarella-salad' ? '#894937' : '#333333'}}>
                                    Mozzarella s bazalkovým pestom, pečené cherry paradajky, rukola, banketka
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <br />
                    {aper ? 
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