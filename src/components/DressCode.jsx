import React from 'react'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

import dressCode from '../photos/dresscode.jpg'

export const DressCode = ({show, setShow}) => {
    const handleClose = () => {
        setShow(false)
    }
    return (
        <Modal show={show} onHide={handleClose} size="lg" >
            <Modal.Body style={{
                backgroundImage: `url(${dressCode})`, 
                backgroundSize: `auto 100%`, 
                backgroundRepeat: 'no-repeat', 
                height: '80vh', 
                backgroundPosition: 'center',
                backgroundColor: '#6a766a',
            }}>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#6a766a', marginTop: '-1px'}} className="d-block d-md-none text-center">
                <Button variant="dark" onClick={handleClose}>Zavrieť</Button>
            </Modal.Footer>
        </Modal>
    )
}