import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import soup from '../../icons/soup.png'
import stop from '../../icons/stop.png'
import like from '../../icons/like.png'
import tekvicovyKrem from '../../icons/tekvicovy-krem.jpg'
import vyvar from '../../icons/vyvar.JPG'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

export const SoupPrefs = ({setStep}) => {
    const [aper, setAper] = useState('')
    const [goAway, setGoAway] = useState(false)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const leaveStep = () => {
        setGoAway(true)
        setTimeout(() => setStep('main-dish-step'), 100)
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
                    <Image className="icon-image-small" src={soup} alt="soup" fluid />
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
                            Polievka
                        </h4>
                        <p>
                            Polievočku by som si dal. Ďaľšia replika majiteľa presláveného psa na skejtborde.
                            Na výber je teda klasika <strong>Slepačí vývar</strong>, ktorý vám pripraví žalúdok na ťažké ráno.
                            Na svoje si prídu aj zeleninári, pre tých máme v ponuke <strong>Tekvicový krém</strong>!
                        </p>
                    </article>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="vyvar"
                                    src={vyvar}
                                    className={aper === 'vyvar' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: aper === 'vyvar' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAper('vyvar')}                                    
                                />
                                <Figure.Caption style={{color: aper === 'vyvar' ? '#894937' : '#333333'}}>
                                    Tradičný slepačí vývar, s rezancami a mäsom
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="tekvicovy-krem"
                                    src={tekvicovyKrem}
                                    className={aper === 'tekvicovy-krem' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: aper === 'tekvicovy-krem' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAper('tekvicovy-krem')}
                                />
                                <Figure.Caption style={{color: aper === 'tekvicovy-krem' ? '#894937' : '#333333'}}>
                                    Tekvicový krém, opečené tekvicové semiačka a tekvicový olej
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