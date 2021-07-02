import React, {useState} from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { InfoElement } from './InfoElement'
import { DressCode } from './DressCode'

export const Infosky = () => {
    const [dressCode, setDressCode] = useState(false)
    return (
        <Container style={{backgroundColor: '#e0c8a0'}} className="py-4" fluid>
            <DressCode show={dressCode} setShow={setDressCode} />
            <Row className="px-4 text-center justify-content-center">
                <Col>
                    <article style={{fontSize: '250%'}} className="shorelines">(info)</article>
                </Col>
            </Row>

            <InfoElement leftText={"Kde to všetko bude"} rightText={"V Modre"} />
            <InfoElement leftText={"Deň svadby"} rightText={"3. Septembra 2021"} />
            <InfoElement leftText={"Miesto obradu"} rightText={<a style={{color: '#894937'}} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Slovensk%C3%BD+evanjelick%C3%BD+a.+v.+kostol+Modra/@48.3331921,17.3110019,17.69z/data=!4m13!1m7!3m6!1s0x476c9776ff45bc11:0x2727c6017450a128!2sModra!3b1!8m2!3d48.3344706!4d17.3072873!3m4!1s0x476c977777f9de75:0x96ec702a5d183b47!8m2!3d48.3324969!4d17.3121716">Slovenský evanjelický kostol a.v.</a>} />
            <InfoElement leftText={"Čas obradu"} rightText={"14:00"} />
            <InfoElement leftText={"Miesto hostiny"} rightText={<a style={{color: '#894937'}} href={"https://www.restauraciastarydom.sk/"} target="_blank" rel="noopener noreferrer">Starý Dom - Vinárstvo u Ludvíka</a>} />
            <InfoElement leftText={"Čas hostiny"} rightText={"Po obrade"} />
            <InfoElement leftText={"Dress Code"} rightText={<span>Asi každý vie, ale pre tých, čo nie to rozpíšeme: Slušne, ale nie ako na ples v opere, alebo filmový festival v Cannes. Pre inšpiráciu <span onClick={() => setDressCode(true)} className="link-custom">klikni sem.</span></span>} />
            <InfoElement leftText={"Doprava"} rightText={`Bude k dispozícii mikrobus, ktorý bude jazdiť medzi Bratislavou a Modrou.
                    Cena taxíka do Bratislavy je v priemere približne 25€.`} />
            <InfoElement leftText={"Ubytovanie"} rightText={<span>Ubytko hradíme rodine, pre ostatných je v okolí k dispozícii napríklad &nbsp;
                    <a style={{color: '#894937'}} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Club+MKM/@48.3339642,17.3104256,18.05z/data=!4m16!1m7!3m6!1s0x476c9776ff45bc11:0x2727c6017450a128!2sModra!3b1!8m2!3d48.3344706!4d17.3072873!3m7!1s0x476c9777c13387b1:0x6b7bb76481091145!5m2!4m1!1i2!8m2!3d48.3340379!4d17.3117396">MGM Club Penzión</a>, &nbsp;
                    <a style={{color: '#894937'}} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/MAY+HOUSE,+MODRA/@48.3360949,17.3097661,17.74z/data=!4m16!1m7!3m6!1s0x476c9776ff45bc11:0x2727c6017450a128!2sModra!3b1!8m2!3d48.3344706!4d17.3072873!3m7!1s0x0:0xab1289e928b00d85!5m2!4m1!1i2!8m2!3d48.3361031!4d17.3108141">May House</a> alebo&nbsp;
                    <a style={{color: '#894937'}} target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/Hotel+Majolika/@48.3327641,17.3069372,17.5z/data=!4m16!1m7!3m6!1s0x476c9776ff45bc11:0x2727c6017450a128!2sModra!3b1!8m2!3d48.3344706!4d17.3072873!3m7!1s0x476c9776fc2b1bc7:0x9ec7196c3eabe848!5m2!4m1!1i2!8m2!3d48.332793!4d17.30937">Hotel Majolika</a>
            </span>} />
        </Container>
    )
}