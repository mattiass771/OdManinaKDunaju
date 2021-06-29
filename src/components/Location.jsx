import React from 'react'

import Map from './Map'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import staryDom from '../photos/stary-dom.PNG'

import { motion } from 'framer-motion'
import { xAnim } from '../anims/xAnim'

export const Location = () => {
    const geoLocation = {lat: 48.335312831898335, lng: 17.310179542929042}
    return (
        <Container style={{backgroundColor: '#c19a94'}} className="py-4" fluid>
            <Row className="px-4">
                <motion.div 
                    className="col-12 col-md-6"
                    initial="hidden" 
                    animate="visible" 
                    variants={xAnim('right')}
                    style={{
                        height: '400px', 
                        backgroundImage: `url(${staryDom})`, 
                        backgroundSize: 'cover', 
                        backgroundRepeat: 'no-repeat', 
                        backgroundPosition: 'center',
                    }}
                >
                    <motion.div
                        style={{height: '400px'}}
                        initial="hidden" 
                        animate="visible" 
                        variants={xAnim('left', -500, 1.5)} 
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
                    initial="hidden" 
                    animate="visible" 
                    variants={xAnim('left')} 
                    style={{backgroundColor: '#F2F1F0'}}
                >
                    <Map 
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API}&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `400px` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        lat={geoLocation.lat}
                        lng={geoLocation.lng}
                    />
                </motion.div>
            </Row>
        </Container>
    )
}