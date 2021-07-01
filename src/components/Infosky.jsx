import React, {useEffect} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { xAnim } from '../anims/xAnim'

export const Location = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
        <Container style={{backgroundColor: '#c19a94'}} className="py-4" fluid>
            <Row className="px-4 text-center">
                <Col>
                    <article style={{fontSize: '250%'}} className="shorelines">(informácie)</article>
                </Col>
            </Row>
            <Row className="px-4">
                <motion.div 
                    className="col-12 col-md-6"
                    ref={ref}
                    initial="hidden" 
                    animate={controls}
                    variants={xAnim('right')}
                    style={{
                        height: '500px', 
                        backgroundImage: `url(${staryDom})`, 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center',
                    }}
                >
                    <motion.div
                        style={{height: '500px'}}
                        ref={ref}
                        initial="hidden" 
                        animate={controls}
                        variants={xAnim('left', -1000, 1.5)} 
                    >
                        <Row className="text-center d-none d-md-flex" style={{alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.6)', width: '70%', height: '100%'}}>
                            <Col>
                                <p style={{fontSize: '180%'}}>Starý Dom<br />Vináreň u Ludvíka<br /><span style={{fontSize: '70%'}}>Dukelská 997, Modra</span></p>
                                <p>Reštaurácia Starý Dom v sebe ukrýva nielen gastronomický zážitok a výborné domáce víno, ale aj množstvo historických spomienok. Pamiatkovo chránený dom zo 17. storočia sa nachádza v centre kráľovského mesta Modra a nadchne vás svojím historickým kameninovým vzhľadom.</p>
                            </Col>
                        </Row>
                        <Row className="text-center d-flex d-md-none" style={{alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.6)', width: '90%', height: '100%'}}>
                            <Col>
                                <p style={{fontSize: '180%'}}>Starý Dom<br />Vináreň u Ludvíka<br /><span style={{fontSize: '70%'}}>Dukelská 997, Modra</span></p>
                                <p>Reštaurácia Starý Dom v sebe ukrýva nielen gastronomický zážitok a výborné domáce víno, ale aj množstvo historických spomienok. Pamiatkovo chránený dom zo 17. storočia sa nachádza v centre kráľovského mesta Modra a nadchne vás svojím historickým kameninovým vzhľadom.</p>
                            </Col>
                        </Row>
                    </motion.div>
                </motion.div>
                <motion.div 
                    className="col-12 col-md-6"
                    ref={ref}
                    initial="hidden" 
                    animate={controls}
                    variants={xAnim('left')} 
                    style={{backgroundColor: '#F2F1F0'}}
                >
                    
                </motion.div>
            </Row>
        </Container>
    )
}