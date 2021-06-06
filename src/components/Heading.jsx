import React from 'react'

import { motion } from 'framer-motion';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const Heading = () => {
    const colStyles = {
        height: '400px'
    }
    const xAnim = (dir) => {
        const variantObj = {
            hidden: { 
                x: 0,
            },
            visible: {
                x: 0,
                transition: {
                    duration: 0.7,
                    ease: "easeOut",
                }
            }
        }
        switch(dir) {
            case 'left':
                return {...variantObj, hidden: { x: 250 }}
            case 'right':
                return {...variantObj, hidden: { x: -250 }}
            default: 
                return {...variantObj}
        } 
        
      }
    return (
        <Container fluid>
            <Row>
                <Col 
                    style={{
                        ...colStyles,
                        backgroundColor: 'green'
                    }} 
                    fluid
                >
                    <motion.div 
                        initial="hidden" 
                        animate="visible" 
                        variants={xAnim('right')} 
                    >
                            <div style={{width: '300px', height: '300px', backgroundColor: 'grey'}}>manin</div>
                    </motion.div>
                </Col>
                <Col 
                    style={{
                        ...colStyles,
                        backgroundColor: 'red'
                    }} 
                    fluid
                >
                    <motion.div  
                        initial="hidden" 
                        animate="visible" 
                        variants={xAnim('left')} 
                    >
                            <div style={{width: '300px', height: '300px', backgroundColor: 'blue', float: 'right'}}>dunaj</div>
                    </motion.div>
                </Col>
            </Row>
            <Row className="text-center" style={{marginTop: '-200px'}}>
                <Col>
                    Tu bude dalsi text
                </Col>
            </Row>
        </Container>
    )
}