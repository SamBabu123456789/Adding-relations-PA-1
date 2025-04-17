import React from 'react'

function Destination(props) {
  return (
    <div>
      <h1>{props.jaffa.name}</h1>
      <h1>{props.jaffa.location}</h1>
      <img src={props.jaffa.image} alt="" />
      <h1>{props.jaffa.description}</h1>
      <h1>{props.jaffa.price}</h1>
    </div>
  )
}

export default Destination
