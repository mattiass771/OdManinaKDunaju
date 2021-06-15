import React, {useState} from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../../anims/xAnim'

import writing from '../../icons/writing.png'
import stop from '../../icons/stop.png'
import like from '../../icons/like.png'

import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export const NamePrefs = ({setStep}) => {
    const [name, setName] = useState('')
    const [goAway, setGoAway] = useState(false)
    const conditionTwo = (name && name.length > 3 && name.match(/\w+[ ]\w+/) !== null)
    const conditionOne = (name && name.length > 3 && name.match(/\w+/) !== null && !conditionTwo)
    const iconStyles = {maxHeight: '40px', width: 'auto', padding: '5px 0px 4px 25px'}
    const leaveStep = () => {
        setGoAway(true)
        setTimeout(() => setStep('diet-step'), 250)
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
                            Osobné údaje
                        </h4>
                        <p>
                            Vitajte na našom nekonkurenčnom organizačnom webe pre lenivých plánovačov. (Mladomanželov)
                            Poprosili by sme každého z vás, aby ste nám sem zazdieľali zopár infošiek a tým sebe (aj nám)
                            pomohli k lepšiemu zážitku z našej svadby. Aby toho na vás nebolo veľa naraz, rozkúskujeme si to
                            na pár krokov.
                        </p>
                    </article>
                    <Form.Group>
                        <Form.Label>Meno a priezvisko:</Form.Label>
                        <Form.Control
                            type="text" 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
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
                    {conditionTwo &&
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