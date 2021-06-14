import React from 'react'

import { motion } from 'framer-motion'
import { xAnim } from '../anims/xAnim'

import dunaj from '../icons/river.png'
import manin from '../icons/mountain.png'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

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
                        <Image className="icons-row" src={manin} alt="manin" />
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
                        <Image className="icons-row" src={dunaj} alt="dunaj" />
                    </motion.div>
                </Col>
            </Row>
            <Row className="text-center bude-svadba">
                <Col>
                    <article className="shorelines">(budesvadba)</article>
                </Col>
            </Row>
        </Container>
    )
}