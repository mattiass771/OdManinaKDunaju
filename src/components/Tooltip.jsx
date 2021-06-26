import React from 'react'

import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'

import { AiFillInfoCircle } from 'react-icons/ai'

export default ({url, text}) => {
    return (
        <OverlayTrigger
            placement={"top"}
            overlay={
                <Tooltip id={`tooltip`}>
                    <a target="_blank" rel="noopener noreferrer" href={url} style={{textDecoration: 'none', color: 'whitesmoke'}}>
                        {text}
                    </a>
                </Tooltip>
            }
            > 
                <a target="_blank" rel="noopener noreferrer" href={url} style={{textDecoration: 'none', color: '#894937'}}>
                    <AiFillInfoCircle style={{margin: '-14px 4px 0px 4px', cursor: 'pointer'}} />
                </a>
        </OverlayTrigger>
    )
}