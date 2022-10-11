import React from 'react'

export default function Card({conc, amo, dat, type}) {
  return (
    <div>
        <h3>{conc}</h3>
        <h3>${amo}</h3>
        <h5>{dat}</h5>
        <h5>{type}</h5>
    </div>
  )
}
