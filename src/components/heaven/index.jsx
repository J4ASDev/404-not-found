import React, { Component } from 'react'
import Shift from "../shift"

class upperLevel extends Component {
  render () {
    return (
      <div>

        upperLevel
        <i class="fas fa-angle-up"></i>
        <i class="fas fa-angle-down"></i>
        <Shift url="/"> GO BACK TO THE LAND </Shift>
      </div>
    )
  }
}

export default upperLevel;