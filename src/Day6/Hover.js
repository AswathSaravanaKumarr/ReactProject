import React, { Component } from 'react'
import EnComponent from './EnComponent'

class Hover  extends Component { 
  render() {
    return (
      <div>
        <button onMouseOver={this.props.inc}>click me {this.props.count}</button>
      </div>
     
    )
  }
}

export default EnComponent(Hover)