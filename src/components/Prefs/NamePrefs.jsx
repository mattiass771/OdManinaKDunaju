import React, {useState, useEffect} from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import writing from '../../icons/writing.png'
import stop from '../../icons/stop.png'
import like from '../../icons/like.png'
import cheerio from '../../icons/cheerio.png'
import sad from '../../icons/sad.png'
import pig from '../../icons/pig.png'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Figure from 'react-bootstrap/Figure'
import Button from 'react-bootstrap/Button'

const formatName = (input) => {
    const trimmed = input.trim()
    const formatted = trimmed.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    const final = formatted.toLowerCase().replace(/[ ]/g, '-')
    return final
}

export const NamePrefs = ({setUser, setUserInfo, userInfo, addNewUser, token}) => {
    const [name, setName] = useState('')
    const [attend, setAttend] = useState('')
    const [goAway, setGoAway] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const conditionTwo = (name && name.length > 3 && name.match(/[a-ža-z]+[ ][a-ža-z]+/i) !== null)
    const conditionOne = (name && name.length > 3 && name.match(/[a-ža-z]+/i) !== null && !conditionTwo)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const handleAsyncUserInfo = async () => {
        const user = formatName(name)
        setUserInfo({...userInfo, name, user, attend})
        setUser(user)
        return user
    }
    const leaveStep = () => {
        handleAsyncUserInfo().then(async (user) => {
            if(!isSubmitted) {
                await addNewUser(name, user, attend)
            }
            return user
        }).then((user) => {
            setUserInfo({...userInfo, name, user, attend})
            setGoAway(true)
        })
    }
    useEffect(() => {
        const checkUser = formatName(name)
        axios.post(`https://www.odmaninakdunaju.sk/guests/user/${checkUser}`, {token})
                .then(res => {
                    const result = res.data
                    const {message} = result
                    if (message === 'success') {
                        setIsSubmitted(true)
                    } else {
                        setIsSubmitted(false)
                    }
                }).catch(err => console.log(err))

    }, [name])
    return (
        <Row className="text-center">
            <Col xs={12} md={6} lg={5} xl={{span: 3, offset: 1}}>
                <motion.div 
                    className="icon-small mb-4"
                    initial={goAway ? 'visible' : 'hidden'} 
                    animate={!goAway ? 'visible' : 'hidden'} 
                    variants={xAnim('right', -1200, goAway ? 0.5 : 0)} 
                >
                    <Image className="icon-image-small" src={writing} alt="writing" fluid />
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
                            Potvrď svoju účasť
                        </h4>
                        <h5>Ak si chceš zahrať prasiatko a už máš registráciu za sebou, vyplň svoje meno (tak ako si ho zadal) a môžeš skúšať vylepšiť svoje skóre.</h5>
                        {!isSubmitted ? 
                            <p>
                                Vitaj na našom nekonkurenčnom organizačnom webe pre lenivých plánovačov. (Mladomanželov)
                                Poprosili by sme teba aj ostatných hostí z tvojej domácnosti resp. tvojho/tvoju "+1", 
                                aby ste nám sem zazdieľali zopár infošiek a tým sebe (aj nám)
                                pomohli k lepšiemu zážitku z našej svadby. Aby toho na vás nebolo veľa naraz, rozkúskujeme si to
                                na pár krokov.
                            </p>
                            : 
                            <p>
                                Aha! Vidíme že už si zaregistrovaný, tak ti ostáva zahrať si prasiatko, aby si nahral ešte vyššie skóre. 
                                <br /> (Lebo zatial je to slabotka)
                            </p>
                        }
                    </article>
                    <Form.Group>
                        <Form.Label>
                            Meno a priezvisko: <br />
                            <span style={{fontSize: '65%'}}>
                                Ak už si to raz vyplňoval, môžeš si vylepšiť skóre. Stačí zadať znovu tvoje meno. <br />
                                (s alebo bez diakritiky, nám to je jedno)
                            </span>
                        </Form.Label>
                        <Form.Control
                            spellCheck="false"
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <br />
                    <Row>
                        {!isSubmitted ?
                        <>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="pridem"
                                    src={cheerio}
                                    className={attend === 'pridem' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: attend === 'pridem' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAttend('pridem')}                                    
                                />
                                <Figure.Caption style={{fontSize: '150%' , color: attend === 'pridem' ? '#894937' : '#333333'}}>
                                    Prídem
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="nepridem"
                                    src={sad}
                                    className={attend === 'nepridem' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: attend === 'nepridem' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAttend('nepridem')}
                                />
                                <Figure.Caption style={{fontSize: '150%' , color: attend === 'nepridem' ? '#894937' : '#333333'}}>
                                    Neprídem
                                </Figure.Caption>
                            </Figure>
                        </Col>
                        </> :
                        <Col>
                            <Figure>
                                <Figure.Image
                                    width={100}
                                    height={100}
                                    alt="whatever"
                                    src={pig}
                                    className={attend === 'whatever' ? "box-shadow" : "box-shadow-light"}
                                    style={{border: attend === 'whatever' ? '3px solid #894937' : '0px', borderRadius: '5px'}}
                                    onClick={() => setAttend('whatever')}
                                />
                                <Figure.Caption style={{fontSize: '150%' , color: attend === 'whatever' ? '#894937' : '#333333'}}>
                                    Chcem hrať prasa.
                                </Figure.Caption>
                            </Figure>
                        </Col>}
                    </Row>
                    <br />
                    {!conditionOne && !conditionTwo &&
                        <Button variant="dark" disabled>
                            Vyplň meno a priezvisko.
                            <Image style={iconStyles} src={stop} />
                        </Button>
                    }
                    {conditionOne &&
                        <Button variant="dark" disabled>
                            Ešte priezvisko?
                            <Image style={iconStyles} src={stop} />
                        </Button>
                    }
                    {conditionTwo && !attend &&
                        <Button variant="dark" disabled>
                            Ešte vyber možnosť.
                            <Image style={iconStyles} src={like} />
                        </Button>
                    }
                    {conditionTwo && attend && attend.length > 0 &&
                        <Button onClick={() => leaveStep()} variant="dark">
                            Poďme ďalej!
                            <Image style={iconStyles} src={like} />
                        </Button>
                    }
                </motion.div>
            </Col>
        </Row>
    )
}