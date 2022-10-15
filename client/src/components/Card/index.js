import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Card({conc, amo, dat, type}) {

  var d = new Date(dat)
  return (
    <div>
    <Container  fluid="md">
    <Row class="row justify-content-start">
        <Row class="row justify-content-around" className="fw-bold"><h3>{conc}</h3>     <h3>${amo}</h3></Row>
        </Row>
        </Container>
        <Container  >
        <Row class="row justify-content-start">
        <Row class="row justify-content-betwwen" >{type}                {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Row>
    </Row>
    </Container>
    </div>
  )
}
