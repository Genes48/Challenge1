import React from 'react';
import { Link } from 'react-router-dom';

export default function ABM() {
  return (
    <div>
      <h1>ABM</h1>
      <Link to="/"><button>Back to Home</button></Link>
      <Link to="/form"><button>Add new operation</button></Link>
      <div>List operations</div>
    </div>
  )
}
