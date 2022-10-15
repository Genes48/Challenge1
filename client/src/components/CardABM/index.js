import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function CardABM({conc, amo, id, dat, type, category}) {

  var d = new Date(dat)

  return (
    <Card>
    <Card.Header as="h5">{conc}</Card.Header>
    <Card.Body>
    <Card.Title>${amo}</Card.Title>
    <Card.Text>{category[0].name}</Card.Text><Card.Text>{type}</Card.Text><Card.Text>{d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}</Card.Text>
    <Button variant="light"><Link to={`/form/${id}/${category[0].name}`}>Modify or Delete operation</Link></Button>
    </Card.Body>
    </Card>
  )
}
