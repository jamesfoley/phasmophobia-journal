import React, {useCallback, useState} from 'react'
import Container from 'react-bootstrap/Container'

import './App.css'
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import {evidence, ghosts} from "./data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Button from "react-bootstrap/Button"


const App = () => {
  const [selectedEvidence, setSelectedEvidence] = useState([])

  const handleEvidenceClick = useCallback((key) => {
    console.log(key)
    const newSelectedEvidence = [...selectedEvidence]
    console.log(newSelectedEvidence)
    if (!newSelectedEvidence.includes(key)) {
      newSelectedEvidence.push(key)
    } else {
      newSelectedEvidence.splice(newSelectedEvidence.indexOf(key), 1)
    }

    setSelectedEvidence(newSelectedEvidence)
  }, [selectedEvidence])

  return (
    <Container className="p-3">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Phasmophobia Journal</Navbar.Brand>
      </Navbar>

      <Card body className="mt-3">
        Welcome back. I've got some jobs ready for you.
      </Card>

      <h2 className="mt-3">Evidence</h2>
      <Card body>
        <Form>
          <Form.Group className="d-flex justify-content-center mb-0">
            <ButtonGroup className="mb-0" aria-label="Basic example">
              {Object.keys(evidence).map(key => {
                return <Button variant={selectedEvidence.includes(key) ? "primary" : "secondary"} onClick={() => {handleEvidenceClick(key)}}>{evidence[key]}</Button>
              })}
            </ButtonGroup>
          </Form.Group>
        </Form>
      </Card>

      <h2 className="mt-3">Ghosts</h2>
      <Row>
        {ghosts.filter(ghost => {
          const ghostEvidenceKeys = []
          Object.keys(evidence).forEach((key) => {
            if(ghost.evidence.includes(evidence[key])) {
              ghostEvidenceKeys.push(key)
            }
          })

          return selectedEvidence.every(item => ghostEvidenceKeys.includes(item))
        }).map(ghost => {
          return <Col xl={4} lg={6} md={12} className="d-flex">
            <Card body className="mb-3 w-100">
              <h4>{ghost.name}</h4>
              <p className="mb-0">
                <strong>Evidence</strong>
              </p>
              <ul>
                {ghost.evidence.map(ghostEvidence => {
                  let evidenceKey = ''
                  Object.keys(evidence).forEach(key => {
                    if (evidence[key] === ghostEvidence) evidenceKey = key
                  })
                  const className = !selectedEvidence.includes(evidenceKey) ? 'text-danger' : ''
                  return <li className={className}>{ghostEvidence}</li>
                })}
              </ul>
              <p className="mb-0">
                <strong>Notes</strong>
              </p>
              <ul>
                {ghost.notes.map(ghostNote => {
                  return <li>{ghostNote}</li>
                })}
              </ul>
            </Card>
          </Col>
        })}
      </Row>

    </Container>
  )
}

export default App
