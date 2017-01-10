import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as demoAction from '../../actions/demo'
import api from '../../api'

class Demo extends Component {

    //----装载组件触发-----------//
    //组件加载之前执行，并且永远只执行一次
    conmponentWillMount(){
        debugger;
        this.setState({user:'my user'});
        console.log('will mount');
    }

    //组件加载完毕之后调用一次，从这里开始可以通过 ReactDOM.findDOMNode(this) 获取到组件的 DOM 节点
    componentDitMount(){
        debugger;
        console.log('did mount');
        setTimeOut(function(){
            this.setState({items:{name:'test'}});
        },1000);
    }

    //-------更新组件触发--------------//
    componentWillReceiveProps(){

    }

    //
    shouldComponentUpdate(nextProps,nextState){
        return true;
    }

    componentWillUpdate(){

    }

    componentDidUpdate(){
        
    }

    //------卸载组件触发-----------//
    componentWillUnmount(){

    }

    setState(nextState){

    }

    //it is pure and it does not directly interact with the browser, perform your work in componentDidMount or other lifecycle method instead.
    //render() will not be invoked if shouldComponentUpdate() returns false.
    render() {
        const { demo, dispatch } = this.props
        return (
            <div className = "page-container" >
              <input type ='button' value='获取数据'  onClick={()=>{dispatch(demoAction.getUser())}} />
            </div>
        )
    }
}


Demo.defaultProps={
    color:'blue'
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
