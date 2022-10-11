import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({conc, amo, id, dat, type}) {
  return (
    <div>
        <h3>{conc}</h3>
        <h3>${amo}</h3>
        <h5>{dat}</h5>
        <h5>{type}</h5>
        <Link to={`/form/:${id}`}><button>Modify or Delete operation</button></Link>
    </div>
  )
}
