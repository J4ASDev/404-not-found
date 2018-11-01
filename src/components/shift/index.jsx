import React from 'react'
import { Link } from 'react-router-dom'

function shift(props) {
  return (
    <Link to={props.url}>
      {props.children}
    </Link>
  )
}

export default shift;