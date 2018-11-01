import React, { Component } from 'react'
import Shift from '../shift'

import './underground.css'

class Underground extends Component {
  render () {
    return (
      <div className="container-underground">
        <div className="underground-header">
          <Shift url="/">
            <i className="fas fa-angle-up"></i>
            <p>GO BACK TO THE LAND</p>
          </Shift>
        </div>

        <section className="underground-body-outside">
          <div className="underground-body">
            <div className="underground-body-inside">
              <h1 className="underground-title">404</h1>
              <h3 className="underground-halfTitle">NOT FOUND</h3>
            </div>
          </div>
        </section>

        <footer className="underground-footer">
          <div className="underground-footer-icons">
            <a href="https://twitter.com/J4ASDEV">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="https://github.com/J4ASDev">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@jonathanaraujo">
              <i className="fab fa-medium"></i>
            </a>
          </div>
          <div className="underground-footer-creator">
            <span>From </span>
            <img src="https://image.flaticon.com/icons/svg/197/197580.svg" height="30" alt="Venezuela's flag"/>
            <span>by Jonathan Araujo</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Underground;