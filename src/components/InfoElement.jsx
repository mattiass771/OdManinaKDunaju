import React, {useEffect} from 'react'

import Col from 'react-bootstrap/Col'

import { motion, useAnimation } from 'framer-motion'
import { useInView } from "react-intersection-observer";
import { xAnim } from '../anims/xAnim'

export const InfoElement = ({leftText, rightText}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start("visible");
      }
    }, [controls, inView]);
    return (
        <motion.div 
                className="row"
                ref={ref}
                initial="hidden" 
                animate={controls}
                variants={xAnim('right')}
                style={{color: '#6a766a'}}
            >
            <Col>
                <p className="d-none d-md-block" style={{fontSize: '180%', textAlign: 'right'}}>{leftText}</p>
                <p className="d-md-none" style={{fontSize: '120%', textAlign: 'right'}}>{leftText}</p>
            </Col>
            <Col>
                <p className="d-none d-md-block" style={{fontSize: '180%'}}>{rightText}</p>
                <p className="d-md-none" style={{fontSize: '120%'}}>{rightText}</p>
            </Col>
        </motion.div>
    )
}