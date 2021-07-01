import React, {useEffect, useState} from 'react'
import axios from 'axios' 

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import pig from '../../icons/pig.png'
import angryPig from '../../icons/angrypig.png'
import grass from '../../icons/grass.jpg'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

let timeout;
let clickTimeout;

export const PigPrefs = ({token, user, setUser, setStep, highScoreDb}) => {
    const [goAway, setGoAway] = useState(false)
    const [intensity, setIntensity] = useState(3)
    const [points, setPoints] = useState(0)
    const [tries, setTries] = useState(10)
    const [highScore, setHighScore] = useState(highScoreDb)
    const [clickWait, setClickWait] = useState(false)
    const [goNext, setGoNext] = useState(true)
    const [leftCoor, setLeftCoor] = useState(0)
    const [topCoor, setTopCoor] = useState(0)
    const [goMinusLeft, setGoMinusLeft] = useState(false)
    const [goMinusTop, setGoMinusTop] = useState(false)

    const clearTimeouts = () => {
        clearTimeout(timeout)
        clearTimeout(clickTimeout)
        return;
    }

    useEffect(() => {
        return (
            clearTimeouts()
        )
    }, [])

    useEffect(() => {
        if (highScore > 0) {
            axios.post(`https://www.odmaninakdunaju.sk/guests/update-highscore/${user}`, {highScore, token})
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }
    }, [highScore])

    const leaveStep = () => {
        setUser(null)
        setGoAway(true)
        setTimeout(() => setStep('name-step'), 250)
    }

    const sleep = (ms) => {
        return new Promise(resolve => timeout = setTimeout(resolve, ms));
    }

    const activateClickWait = () => {
        clearTimeout(clickTimeout)
        setClickWait(true)
        clickTimeout = setTimeout(() => setClickWait(false), 1000)
    }

    const handleClick = (e) => {
        if (e.target.id === "pig" && e.isTrusted) {
            if (clickWait) {
                return activateClickWait()
            } else {
                setPoints(points + 1)
                activateClickWait()
                if (points%5 === 0 && intensity > 0) {
                    setIntensity(intensity - 1)
                }
            }
        } else if (e.target.id === "grass" && tries > 0) {
            setTries(tries - 1)
        }
    }

    useEffect(() => {
        if (topCoor >= 250) {
            setGoMinusTop(true)
        } else if (topCoor <= 0 && topCoor < 4) {
            setGoMinusTop(false)
        }
        if (topCoor > 122 && topCoor < 127) {
            const changeDir = Math.floor(Math.random() * 3) + 0
            setGoMinusTop(changeDir === 0 ? !goMinusTop : goMinusTop)
        }
    }, [topCoor])

    useEffect(() => {
        if (leftCoor >= 250) {
            setGoMinusLeft(true)
        } else if (leftCoor <= 0 && leftCoor < 4) {
            setGoMinusLeft(false)
        }
        if (leftCoor > 122 && leftCoor < 127) {
            const changeDir = Math.floor(Math.random() * 3) + 0
            setGoMinusLeft(changeDir === 0 ? !goMinusLeft : goMinusLeft)
        }
    }, [leftCoor])
    
    const handleCoors = async () => {
        await sleep(intensity)
        const changeTop = Math.floor(Math.random() * 3) + 0
        const changeLeft = Math.floor(Math.random() * 3) + 0
        setLeftCoor(goMinusLeft 
            ? leftCoor-(changeTop+changeLeft === 0 ? 1 : changeLeft) 
            : leftCoor+(changeTop+changeLeft === 0 ? 1 : changeLeft)
        )
        setTopCoor(goMinusTop 
            ? topCoor-(changeTop+changeLeft === 0 ? 1 : changeTop) 
            : topCoor+(changeTop+changeLeft === 0 ? 1 : changeTop)
        )
    }
    
    useEffect(() => {
        clearTimeout(timeout)
        handleCoors().then(() => setGoNext(!goNext))
    }, [goNext])

    useEffect(() => {
        if (highScore < points) {
            setHighScore(points)
            //axios call to update highscore
        }
    }, [points])

    useEffect(() => {
        if (tries === 10) {
            setPoints(0)
            setIntensity(4)
            //axios call to update highscore
        }
    }, [tries])

    return (
        <Row className="text-center">
            <Col xs={12} md={6} lg={5} xl={{span: 3, offset: 1}} style={{height: '400px'}}>
                <motion.div 
                    className="icon-small mb-4"
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('right', -1200)} 
                >
                    <div style={{position: 'relative', height: '75px'}}>
                        <p style={{fontSize: '125%'}}>
                            <span>Najvyššie skóre: <strong>{highScore}</strong></span>
                            <br />
                            <span>Body: <strong>{points}</strong></span>&nbsp;
                            <span>Pokusy: <strong>{tries}</strong></span>
                        </p>
                    </div>
                    <div id="grass" onClick={(e) => handleClick(e)} style={{margin: '0 auto', position: 'relative', height: '300px', width: '300px', border: '2px solid #894937', background: `url(${grass})`}}>
                        {tries > 0 &&
                            <Image 
                                id="pig"
                                draggable="false"
                                selectable="false"
                                onMouseDown={(e) => handleClick(e)}
                                onTouchStart={(e) => handleClick(e)}
                                style={{cursor: clickWait ? '' : 'pointer', position: 'absolute', height: '50px', width: '50px', left: leftCoor, top: topCoor}} 
                                className="icon-image-small" 
                                src={clickWait ? angryPig : pig} 
                                alt="pig" 
                            />
                        }
                        {clickWait && 
                            <div id="halo" style={{height: '300px', width: '300px', backgroundColor: 'rgba(193, 154, 148, 0.5)'}}></div>
                        }
                        {tries === 0 &&
                            <div style={{paddingTop: '100px'}}>
                                <h2>Koniec hry.</h2>
                                <br />
                                <Button variant="dark" onClick={() => setTries(10)}>Skús znovu</Button>
                            </div>
                        }
                    </div>
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
                            Ďakujeme za trpezlivosť!
                        </h4>
                        <p>
                            Tvoje preferencie máme uložené, ďakujeme ešte raz, veľmi nám to uľahčilo prípravu svadby. 
                            Tieto údaje budú použité pri objednávke jedál a pitia.
                            <br />
                            <br />
                            Bohužiaľ, ak si čakal pečené prasiatko, na našu svadbu nepríde. Ale môžeš si ho tu aspoň skúsiť chytiť.
                            Legenda hovorí, že ten kto nahrá aspoň 20 bodov, uvidí v náš svadobný deň tesne pred pol nocou zlaté prasiatko.
                            <br />
                            <br />
                            Pre vyplnenie údajov ďalšieho hosťa klikni na tlačidlo nižšie.
                        </p>
                        <Button variant="dark" onClick={() => leaveStep()}>Ďaľší hosť</Button>
                    </article>
                </motion.div>
            </Col>
        </Row>
    )
}