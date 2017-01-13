import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Nav from '../../components/common/nav'

class App extends Component {
  render() {
    const { children, location } = this.props
    return (
      <div className="page-container">
        <Nav/>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

export default connect()(App)
