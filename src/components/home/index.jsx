import React, { Component } from 'react'
import Shift from "../shift"

class home extends Component {
  render () {
    return (
      <div>
        <Shift url="/heaven"> GO TO HEAVEN </Shift>

        home

        <Shift url="/underground"> GO TO UNDERGROUND </Shift>

      </div>
    )
  }
}

export default home;