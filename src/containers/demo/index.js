import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as demoAction from '../../actions/demo'
import api from '../../api'

class Demo extends Component {

    //组件加载完毕之后调用一次，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点
    componentDidMount(){
    }

    //异步action

    //it is pure and it does not directly interact with the browser, perform your work in componentDidMount or other lifecycle method instead.
    //render() will not be invoked if shouldComponentUpdate() returns false.
    render() {
        const { users,userId,user,dispatch } = this.props
        return (
            <div className = "page-container" >
              <input type ='button' value='redux-thunk async'  onClick={()=>{dispatch(demoAction.getUserAsync(userId))}} />

               <input type ='button' value='redux-promise async'  onClick={()=>{dispatch(demoAction.addUserAsync(user))}} />
            </div>
        )
    }
}


Demo.defaultProps={
    userId:12,
    user:{
        id:23,
        name:'mockuser'
    }
}

Demo.propTypes = {
    // Injected by React Router
    children: PropTypes.node
}

const mapStateToProps = (state) => {
    const { users } = state;
    return {
        users: users ? users : [],
    };
};



export default connect(mapStateToProps)(Demo)
