import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import liquor from '../../icons/liquor.png'
import like from '../../icons/like.png'
import borka from '../../icons/borka.png'
import tuzemak from '../../icons/tuzemak.png'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'

import Tooltip from '../Tooltip'

export const AlcoholPrefs = ({setStep, updateUser, setUserInfo, userInfo}) => {
    const [alkohol, setAlkohol] = useState('')
    const [goAway, setGoAway] = useState(false)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const handleAsyncUserInfo = async () => {
        setUserInfo({...userInfo, liquor: alkohol, closed: true})
    }
    const leaveStep = () => {
        handleAsyncUserInfo().then(() => {
            setGoAway(true)
            setTimeout(() => setStep('pig-step'), 100)
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
                    <Image className="icon-image-small" src={liquor} alt="liquor" fluid />
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
                            Alkohol
                        </h4>
                        <p>
                            Žiaden strach, nikoho nebudeme nútiť piť, hlavne nie šoférov. Tolerancia alkoholu za volantom je na Slovensku zatiaľ
                            stále nula celých nula celých nula. <Tooltip text="Ak nechápeš, klikni sem." url="https://www.youtube.com/watch?v=w_UcIQu7MTo" />
                            Teda okrem Dobšinského kopca, tam aj dva a pol promile môže skúsený šofér. 
                            <Tooltip text="Ak nechápeš, klikni sem." url="https://www.youtube.com/watch?v=cOelmiCl1j8" />
                            Kľudne môžeš preskočiť tento krok ak neplánuješ piť tvrdé, 
                            ale upozorňujem, že domácko bude prvotriedne. Počas hostiny sa samozrejme bude rozlievať luxusné víno značky <a target="_blank" rel="noopener noreferrer" href="https://masvino.sk/VinarstvoKrizanovicPrievoznik">Križanovič a Prievozník</a>, ktoré si môžeš predom vyskúšať aj doma zakúpením cez nevestin e-shop <a target="_blank" rel="noopener noreferrer" href="https://masvino.sk/">masvino.sk</a>! 
                            Okrem toho bude na pípe fajnová plznička.
                        </p>
                    </article>
                    <Row>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="borka"
                                    src={borka}
                                    className={alkohol === 'borka' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: alkohol === 'borka' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAlkohol(alkohol === 'borka' ? '' : 'borka' )}                                    
                                />
                                <Figure.Caption style={{color: alkohol === 'borka' ? '#894937' : '#333333'}}>
                                    Biely alkohol - domácko, borka, vodka, gin
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="tuzemak"
                                    src={tuzemak}
                                    className={alkohol === 'tuzemak' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: alkohol === 'tuzemak' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAlkohol(alkohol === 'tuzemak' ? '' : 'tuzemak' )}
                                />
                                <Figure.Caption style={{color: alkohol === 'tuzemak' ? '#894937' : '#333333'}}>
                                    Hnedý alkohol - rum, whisky
                                </Figure.Caption>
                            </Figure>
                        </Col>
                    </Row>
                    <br />
                    {alkohol ? 
                        <Button variant="dark" onClick={() => leaveStep()}>
                            Pokračujeme.
                            <Image style={iconStyles} src={like} />
                        </Button>
                        :
                        <Button variant="dark" onClick={() => leaveStep()}>
                            Nebudem tvrdé.
                            <Image style={iconStyles} src={like} />
                        </Button>
                    }
                </motion.div>
            </Col>
        </Row>
    )
}