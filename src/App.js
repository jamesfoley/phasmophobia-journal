import React, {useCallback, useMemo, useState} from 'react'
import Container from 'react-bootstrap/Container'
import './App.css'

import Navbar from "react-bootstrap/Navbar"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import {evidence, ghosts} from "./data"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"


const App = () => {
  const defaultButtonState = {}
  evidence.forEach(e => {
    defaultButtonState[e.key] = 0
  })
  const [buttonState, setButtonState] = useState(defaultButtonState)

  const handleEvidenceClick = useCallback((key) => {

    // Create a new button state
    const newButtonState = {...buttonState}

    // Get button state
    switch(newButtonState[key]) {
      case 0:
        newButtonState[key] = 1
        break
      case 1:
        newButtonState[key] = 2
        break
      default:
        newButtonState[key] = 0
        break
    }

    setButtonState(newButtonState)

  }, [buttonState])

  const evidenceButtonClass = (state) => {
    switch(state) {
      case 0:
        return "secondary"
      case 1:
        return "primary"
      case 2:
        return "danger"
    }
  }

  const noneButtonClass = () => {
    return Object.values(buttonState).some(val => val !== 0) ? 'secondary' : 'warning'
  }

  const filteredGhosts = useMemo(() => {
    return ghosts.filter(ghost => {
      const selectedEvidence = Object.keys(buttonState).filter(key => buttonState[key] === 1)
      const omittedEvidence = Object.keys(buttonState).filter(key => buttonState[key] === 2)
      const ghostEvidenceKeys = ghost.evidence.map(e => e.key)
      const hasSelectedEvidence = selectedEvidence.every(e => ghostEvidenceKeys.includes(e))
      const hasOmittedEvidence = omittedEvidence.some(e => ghostEvidenceKeys.includes(e))

      return hasSelectedEvidence && !hasOmittedEvidence
    })
  }, [buttonState])

  return (
    <Container className="p-3 text-white">
      <Navbar bg="light" expand="lg" className="rounded">
        <Navbar.Brand className="text-white">Phasmophobia Journal</Navbar.Brand>
      </Navbar>

      <h2 className="mt-3">Evidence</h2>

      <Card body>
        <Form>
          <Form.Group className="d-flex justify-content-center flex-wrap mb-0">
            <Button className="mr-1 mb-1" variant={noneButtonClass()} onClick={() => {setButtonState(defaultButtonState)}}>None</Button>
            {evidence.map(item => {
              return <Button
                className="mr-1 mb-1"
                variant={evidenceButtonClass(buttonState[item.key])}
                onClick={() => {handleEvidenceClick(item.key)}}
              >
                {item.name}
              </Button>
            })}
          </Form.Group>
        </Form>
      </Card>

      <h2 className="mt-3">Ghosts ({filteredGhosts.length})</h2>
      <Row>
        {filteredGhosts.map(ghost => {
          return <Col xl={4} lg={6} md={12} className="d-flex">
            <Card body className="mb-3 w-100">
              <h4>{ghost.name}</h4>
              <p className="mb-0">
                <strong>Evidence</strong>
              </p>
              <ul>
                {ghost.evidence.map(item => {
                  const className = buttonState[item.key] === 0 ? 'text-danger' : ''
                  return <li className={className}>{item.name}</li>
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

      {
        filteredGhosts.length === 0 &&
        <Card body className="text-danger">
          There are no ghosts for your selected evidence.
        </Card>
      }

      <p className="mt-3"><a className="text-muted" href="https://steamcommunity.com/id/Fishcake">Fishcake</a></p>

    </Container>
  )
}

export default App
