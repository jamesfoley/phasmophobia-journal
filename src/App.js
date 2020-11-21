import React, {useState} from 'react'
import Container from 'react-bootstrap/Container'

import './App.css'
import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import {evidence, ghosts} from "./data"


const App = () => {
  const [evidenceOne, setEvidenceOne] = useState('None')
  const [evidenceTwo, setEvidenceTwo] = useState('None')
  const [evidenceThree, setEvidenceThree] = useState('None')

  const selectedEvidence = []
  if (evidenceOne !== "None") selectedEvidence.push(evidenceOne)
  if (evidenceTwo !== "None") selectedEvidence.push(evidenceTwo)
  if (evidenceThree !== "None") selectedEvidence.push(evidenceThree)

  return (
    <Container className="p-3">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Phasmophobia Journal</Navbar.Brand>
      </Navbar>

      <Card body className="mt-3">
        Hello.
      </Card>

      <h2 className="mt-3">Evidence</h2>
      <Card body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>First Evidence</Form.Label>
            <Form.Control
              as="select"
              value={evidenceOne}
              onChange={event => setEvidenceOne(event.target.value)}
            >
              {Object.keys(evidence).map(evidenceKey => {
                return <option value={evidence[evidenceKey]}>{evidence[evidenceKey]}</option>
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Second Evidence</Form.Label>
            <Form.Control
              as="select"
              value={evidenceTwo}
              onChange={event => setEvidenceTwo(event.target.value)}
            >
              {Object.keys(evidence).map(evidenceKey => {
                return <option value={evidence[evidenceKey]}>{evidence[evidenceKey]}</option>
              })}
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Third Evidence</Form.Label>
            <Form.Control
              as="select"
              value={evidenceThree}
              onChange={event => setEvidenceThree(event.target.value)}
            >
              {Object.keys(evidence).map(evidenceKey => {
                return <option value={evidence[evidenceKey]}>{evidence[evidenceKey]}</option>
              })}
            </Form.Control>
          </Form.Group>
        </Form>
      </Card>

      <h2 className="mt-3">Ghosts</h2>
      {ghosts.filter(ghost => {

        return selectedEvidence.every(item => ghost.evidence.includes(item))
      }).map(ghost => {
        return <Card body className="mb-3">
          <h4>{ghost.name}</h4>
          <p>
            <strong>Evidence</strong>
          </p>
          <ul>
            {ghost.evidence.map(ghostEvidence => {
              const className = !selectedEvidence.includes(ghostEvidence) ? 'text-danger' : ''
              return <li className={className}>{ghostEvidence}</li>
            })}
          </ul>
        </Card>
      })}

    </Container>
  )
}

export default App
