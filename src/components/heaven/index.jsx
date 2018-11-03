import React, { Component } from 'react'
import { Shift }  from "../Switch"
import './heaven.css'

class upperLevel extends Component {
  render () {
    return (
      <div className="heaven-container">
        <div className="heaven-background"></div>
        <div className="heaven-polygon-up"></div>
        <div className="heaven-polygon-down"></div>
        <div className="heaven-header">
          <i class="fas fa-bars"></i>
        </div>
        <section className="heaven-body">
          <h2 className="heaven-body-title">4O4</h2>
          <div className="heaven-body-halfTitle">
            <h3>some beautiful paths can't be discovered</h3>
            <h3>without getting lost</h3>
          </div>
        </section>
        <Shift url="/"> 
          <p>GO BACK TO THE LAND</p> 
          <i className="fas fa-angle-down"></i>
        </Shift>
      </div>
    )
  }
}

export default upperLevel;