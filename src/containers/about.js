import React,{ Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'


class About extends Component{
  render(){
    return(
      <div className="content-container">
        <h2>click here!! to know more!</h2>
      </div>
    )  
  } 
}

export default connect()(About)