import React from 'react';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Card({conc, amo, id, dat, type}) {

  var d = new Date(dat)

  return (
    <div className="ms-2 me-auto">
        <div className="fw-bold"><h3>{conc}            ${amo}</h3></div>
        {type}                {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}
        <Link to={`/form/${id}`}><button>Modify or Delete operation</button></Link>
    </div>
  )
}
