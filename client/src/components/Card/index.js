import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './Card.css';

export default function Card({conc, amo, dat, type, category}) {

  var d = new Date(dat)
  return (
    <div className='Card'>
    <Container  className='Card' fluid="md">
    <Row class="row justify-content-start">
        <Row class="row justify-content-around" className="fw-bold"><h3>{conc}           ${amo}</h3></Row>
        </Row>
        </Container>
        <Container  >
        <Row class="row justify-content-start">
        <Row class="row justify-content-betwwen" >{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Row>
    </Row>
    </Container>
        <Container  >
        <Row class="row justify-content-start">
        <Row class="row justify-content-betwwen" >{type}                {category[0].name}</Row>
    </Row>
    </Container>
    </div>
  )
}
