import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Card({conc, amo, dat, type}) {

  var d = new Date(dat)
  return (
    <div className="ms-2 me-auto">
        <div className="fw-bold"><h3>{conc}            ${amo}</h3></div>
        {type}                {d.getDate()}/{d.getMonth()+1}/{d.getFullYear()}
    </div>
  )
}
