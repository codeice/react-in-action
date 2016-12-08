import React,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

class Inbox extends Component{
  render() {
    return (
      <div className="content-container">
        <h2>Welcome to your Inbox! no emails</h2>
      </div>
    )
  }
}

export default connect()(Inbox)