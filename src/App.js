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
  const [selectedEvidence, setSelectedEvidence] = useState([])

  const handleEvidenceClick = useCallback((key) => {
    const newSelectedEvidence = [...selectedEvidence]
    if (!newSelectedEvidence.includes(key)) {
      newSelectedEvidence.push(key)
    } else {
      newSelectedEvidence.splice(newSelectedEvidence.indexOf(key), 1)
    }
    setSelectedEvidence(newSelectedEvidence)
  }, [selectedEvidence])

  const filteredGhosts = useMemo(() => {
    return ghosts.filter(ghost => {
      return selectedEvidence.every(item => ghost.evidence.map(item => item.key).includes(item))
    })
  }, [selectedEvidence])

  const evidenceButtonPrimaryClass = filteredGhosts.length === 0 ? 'danger' : 'primary'

  return (
    <Container className="p-3 text-white">
      <Navbar bg="light" expand="lg" className="rounded">
        <Navbar.Brand className="text-white">Phasmophobia Journal</Navbar.Brand>
      </Navbar>

      <Card body className="mt-3">
        Welcome back. I've got some jobs ready for you.
      </Card>

      <h2 className="mt-3">Evidence</h2>
      <Card body>
        <Form>
          <Form.Group className="d-flex justify-content-center flex-wrap mb-0">
            <Button className="mr-1 mb-1" variant={selectedEvidence.length === 0 ? "warning" : "secondary"} onClick={() => {setSelectedEvidence([])}}>None</Button>
            {evidence.map(item => {
              return <Button className="mr-1 mb-1" variant={selectedEvidence.includes(item.key) ? evidenceButtonPrimaryClass : "secondary"} onClick={() => {handleEvidenceClick(item.key)}}>{item.name}</Button>
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
                  const className = !selectedEvidence.includes(item.key) ? 'text-danger' : ''
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

      <p className="mt-3">By <a href="https://steamcommunity.com/id/Fishcake">Fishcake</a> </p>

    </Container>
  )
}

export default App
