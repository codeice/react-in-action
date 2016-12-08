import React,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Dashboard extends Component{
  render() {
    return (
      <div className='content-container'>
        <h2>Hi,jessie~ Welcome to Dashboard!</h2>
      </div>
    )
  }
}

export default connect()(Dashboard)