import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as demoAction from '../../actions/demo'
import api from '../../api'


class Demo extends Component {
    render() {
        const { children, location } = this.props
        console.log('children=', children);
        return ( < div className = "page-container" >
            Demo Page < /div>
        )
    }
}

//---httpGet
api.get('mockjs/9768/Users',{id:2}).then(function(response){
  console.log('get data=',response.data);
},function(response){
  console.log('taobao get error=',response.data);
});

//----httpPost
api.post('mockjs/9768/Users',{id:2,Name:'jessie'}).then(function(response){
  console.log('post data=',response.data);
},function(response){
  console.log('taobao post error=',response.data);
});

//----httpDelete
api.delete('mockjs/9768/Users',{id:2}).then(function(response){
  console.log('delete data=',response.data);
},function(response){
  console.log('taobao delete error=',response.data);
});

//----httpPut
api.put('mockjs/9768/Users',{id:2}).then(function(response){
  console.log('update data=',response.data);
},function(response){
  console.log('taobao update error=',response.data);
});

Demo.propTypes = {
    // Injected by React Router
    children: PropTypes.node
}

export default connect()(Demo)
