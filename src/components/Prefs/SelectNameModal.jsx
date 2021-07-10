import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const SelectNameModal = ({chooseName, setChooseName, token, setName, leaveStep, setAttend}) => {
    const [namesDb, setNamesDb] = useState([])
    const [nameChosen, setNameChosen] = useState('')
    useEffect(() => {
        axios.post(`https://www.odmaninakdunaju.sk/guests/get-names`, {token})
            .then(res => setNamesDb(res.data))
            .catch(err => console.log('Nenacitali sa mena z databazy, ', err))
    }, [chooseName])
    useEffect(() => {
        if(nameChosen !== 'Vyber meno') {
            setName(nameChosen)
        }
    }, [nameChosen])
    const handleClose = () => {
        setName('')
        setNameChosen('')
        setChooseName(false)
        setAttend('')
    }
    const handleLeave = () => {
        setNameChosen('')
        leaveStep()
        setChooseName(false)
    }
    const showNames = () => {
        return namesDb.map(elem => {
            const {name, user} = elem
            return (
                <option key={user}>{name}</option>
            )
        })
    }
    return (
        <Modal show={chooseName} onHide={handleClose} size="md" >
            <Modal.Body style={{backgroundColor: '#6a766a'}} className="text-center">
                <h1>Nájdi sa!</h1>
                <h4>Ak si sa už zaregistroval, vyber svoje meno zo zoznamu hostí a môžeš si vylepšiť skóre, ak sa tam nevidíš, musíš sa najskôr registrovať.</h4>
                <p>Tip: Aj ak nepríd eš, registruj sa s možnosťou <strong>neprídem</strong>, a môžeš vyhrac zlaté prasa!</p>
                <Form.Group>
                    <Form.Label>Nájdi svoje meno, a môžeš hrac.</Form.Label>
                    <Form.Control
                        as="select"
                        onChange={(e) => setNameChosen(e.target.value)}
                    >
                        <option key={'default'}>Vyber meno</option>
                        {showNames()}
                    </Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#6a766a', marginTop: '-1px', paddingBottom: '1px'}} className="justify-content-center text-center">
                {(nameChosen && nameChosen.length > 0 && nameChosen !== 'Vyber meno') ?
                <Button variant="dark" onClick={handleLeave}>Vybrať meno</Button> :
                <Button variant="dark" onClick={handleClose}>Zavrieť</Button>}
            </Modal.Footer>
        </Modal>
    )
}