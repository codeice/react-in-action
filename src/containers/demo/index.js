import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as demoAction from '../../actions/demo'
import api from '../../api'


class Demo extends Component {
    render() {
        const { demo, dispatch } = this.props
        return (
            <div className = "page-container" >
              <input type ='button' value='获取数据' onClick={()=>{dispatch(demoAction.getUser)}} />
            </div>
        )
    }
}


Demo.propTypes = {
    // Injected by React Router
    children: PropTypes.node
}

const mapStateToProps = (state) => {
    const { demo } = state;
    return {
        demo: demo ? demo : {},
    };
};


export default connect(mapStateToProps)(Demo)
