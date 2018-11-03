import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './switch.css'

function Shift(props) {
  return (
    <div className="shift">
      <Link to={props.url}>
        {props.children}
      </Link>
    </div>
  )
}

function BulletSwitch() {
  return (
    <div className="bulletSwitch">
      {/* Heaven */}
      <NavLink to="/heaven" activeClassName="selected">
        &#9673;        
      </NavLink>
      {/* Home/Land */}
      <NavLink exact to="/" activeClassName="selected">
        &#9673;
      </NavLink>
      {/* Underground */}
      <NavLink to="/underground" activeClassName="selected">
        &#9673;
      </NavLink>
    </div>
  )
}

export { Shift, BulletSwitch}