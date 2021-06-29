import React from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../anims/xAnim'

import dunaj from '../icons/river.png'
import manin from '../icons/mountain.png'

import bride from '../icons/bride.png'
import groom from '../icons/groom.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import Tooltip from './Tooltip'

export const Heading = () => {
    return (
        <Container style={{backgroundColor: '#c19a94'}} className="py-4" fluid>
            <Row>
                <Col>
                    <motion.div 
                        style={{maxWidth: '400px', backgroundColor: 'rgba(0,0,0,0.0)', float: 'left'}}
                        className="icons-row"
                        initial="hidden" 
                        animate="visible" 
                        variants={xAnim('right')} 
                    >
                        <Tooltip 
                            text="Hora v blízkosti mesta, odkiaľ nevesta pochádza. Ak neuhádneš, klikni." 
                            url="https://sk.wikipedia.org/wiki/Ve%C4%BEk%C3%BD_Man%C3%ADn" 
                            component={
                                <Image className="icons-row" src={manin} alt="manin" /> 
                            } 
                        />
                        <motion.div 
                            style={{position: 'absolute', left: -37.5, bottom: 0}}
                            initial="hidden" 
                            animate="visible" 
                            variants={xAnim('right', 0, 1, '50vw', 4)} 
                        >
                            
                            <Tooltip 
                                text="Silvika" 
                                url={null} 
                                component={
                                    <Image style={{height: '60px', width: 'auto'}} src={bride} alt="bride" />
                                } 
                            />
                        </motion.div>
                    </motion.div>
                </Col>
                <Col>
                    <motion.div   
                        style={{ maxWidth: '400px', backgroundColor: 'rgba(0,0,0,0.0)', float: 'right'}}
                        className="icons-row"
                        initial="hidden" 
                        animate="visible" 
                        variants={xAnim('left')} 
                    >
                        <Tooltip 
                                text="Rieka ktorá pretína mesto, z ktorého pochádza ženích. Ak neuhádneš, klikni." 
                                url="https://sk.wikipedia.org/wiki/Dunaj" 
                                component={
                                    <Image className="icons-row" src={dunaj} alt="dunaj" />
                                } 
                            />
                        <motion.div 
                            style={{position: 'absolute', right: -37.5, bottom: 0}}
                            initial="hidden" 
                            animate="visible" 
                            variants={xAnim('left', 0, 1, '-50vw', 4)} 
                        >
                            <Tooltip 
                                text="Matúž" 
                                url={null}
                                component={
                                    <Image style={{height: '60px', width: 'auto'}} src={groom} alt="groom" />
                                } 
                            />
                        </motion.div>
                    </motion.div>
                </Col>
            </Row>
            <Row className="text-center bude-svadba" style={{pointerEvents: 'none'}}>
                <Col>
                    <article className="shorelines">(budesvadba)</article>
                </Col>
            </Row>
        </Container>
    )
}