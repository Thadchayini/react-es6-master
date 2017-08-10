/* global fetch */
'use strict'

import React, { Component, PropTypes } from 'react'


export default class Bio extends Component {
  constructor (props) {
    super(props)
    this.state={



    }

  }
  bioUpdater(){

  }


  render () {
    let{naming} =this.props;
    return (
<div>
        <h3>{this.props.yourSelf}</h3>
        <h1>{this.props.ComponentNameByMe}</h1>
        <button onClick={naming}>from Bio</button>

      </div>

    )
  }
}
