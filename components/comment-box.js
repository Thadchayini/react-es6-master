/* global fetch */
'use strict'

import React, { Component, PropTypes } from 'react'

import Bio from "./Bio.js"
export default class CommentBox extends Component {
  constructor (props) {
    super(props)
    this.state={
      name:'thadcha',
      age:props.age

    }

  }
nameChanger(){
  this.setState({
    name:"thadchayini",
    age:21
  })

}
bioUpdater(){
  this.setState({
    bio:document.getElementsByClassName('bioInfo').value
  })
}
  render () {
    return (
      <div className='comment-box'>
        <h1>{this.state.name}</h1>
         <h2>{this.state.age}</h2>
            <Bio naming={this.nameChanger.bind(this)} yourSelf={this.state.bio}ComponentNameByMe="UKI"/>


            <input onChange={this.bioUpdater.bind(this)} id="bioInfo"/>
      </div>

    )
  }
}

CommentBox.propTypes = {
  url: PropTypes.string.isRequired,
  pollInterval: PropTypes.number.isRequired
}
