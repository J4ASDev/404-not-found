import React, { Component } from 'react'
import Shift from "../shift"
import Profile from "../../images/profile.jpg"

import './land.css'

class home extends Component {
  render () {
    return (
      <div className="land-container">
        <div className="land-body-background"></div>
        <div className="land-body-polygon"></div>
        <div className="land-header">
          <Shift url="/heaven"> 
            <i className="fas fa-angle-up"></i>
            <p> GO TO HEAVEN </p> 
          </Shift>
        </div>
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
            <button className="land-body-back">TAKE ME HOME</button>
            <button className="land-body-report">REPORT PROBLEM</button>
          </div>
        </section>
        <div className="land-footer">
          <Shift url="/underground"> 
            <p> GO TO UNDERGROUND </p>
            <i className="fas fa-angle-down"></i>
          </Shift>
        </div>
      </div>
    )
  }
}

export default home;