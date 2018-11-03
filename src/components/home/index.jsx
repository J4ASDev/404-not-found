import React, { Component } from 'react'
import { Shift } from "../Switch"
import Profile from "../../images/profile.jpg"
import { Link } from 'react-router-dom'

import './land.css'

class home extends Component {
  render () {
    return (
      <div className="land-container">
        <div className="land-body-background"></div>
        <div className="land-body-polygon"></div>
        <Shift url="/heaven"> 
          <i className="fas fa-angle-up"></i>
          <p> GO TO HEAVEN </p> 
        </Shift>
        <section className="land-body">
          <figure className="land-body-profile">
            <img src={Profile}  alt="profile"/>
          </figure>
          <div className="land-body-404">
            <h2 className="land-body-title">ERROR <span>404</span></h2>
            <h3 className="land-body-halfTitle">it's looking like you may have taken a wrong turn.</h3>
            <h3 className="land-body-halfTitle">Do not worry... it happens to the best of us.</h3>
          </div>
          <div className="land-body-buttons">
            <Link to="/" className="land-body-back">TAKE ME HOME</Link>
            <button className="land-body-report">REPORT PROBLEM</button>
          </div>
        </section>
        <Shift url="/underground"> 
          <p> GO TO UNDERGROUND </p>
          <i className="fas fa-angle-down"></i>
        </Shift>
      </div>
    )
  }
}

export default home;