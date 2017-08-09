/* global fetch */
'use strict'

import React, { Component, PropTypes } from 'react'


export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state={
      name:'Thadchayini',
      age:props.age

    }

  }
nameChanger(){
  this.setState({
    name:"person",
    age:22
  })

}

  render () {
    return (
      <div className='comment-box'>
        <h1>{this.state.name}</h1>
         <h2>{this.state.age}</h2>
          <button onClick={this.nameChanger.bind(this)}>nameChanger</button>
      </div>

    )
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired
}
