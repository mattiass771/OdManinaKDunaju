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
                <p style={{fontSize: '180%', textAlign: 'right'}}>{leftText}</p>
            </Col>
            <Col>
                <p style={{fontSize: '180%'}}>{rightText}</p>
            </Col>
        </motion.div>
    )
}