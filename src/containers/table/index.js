import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import   Table from '../../components/table'

class TableList extends Component{

    _renderRow(row){
        // ------------ 注意：这里对callback函数的写法 -----------
       let onEdit = (x)=> {
           console.log(x+x)
       }

       let onDelete = (x)=> {
           console.log(x*x)
       }
       // ---------------------------------------------------
       return (
           <tr key={row.key}>
               <td><input type='checkbox' ref={"item_" + row.key} />{row.key}</td>
               <td>{row.name}</td>
               <td>{row.age}</td>
               <td>{row.birthday}</td>
               <td>{row.job}</td>
               <td>{row.address}</td>
               <td>
                   <button  onClick={()=>onEdit(row.key)} >编辑</button>
                   <button  onClick={()=>onDelete(row.key)}>删除</button>
               </td>
           </tr>
       )
    }

    render(){
        let dataSource = [
          {
             key: '1',
             name: '胡彦斌',
             age: 32,
             birthday: '2016-12-29',
             job: '前端工程师',
             address: '西湖区湖底公园1号'
          }, 
          {
             key: '2',
             name: '胡彦祖',
             age: 42,
             birthday: '2016-12-29',
             job: '前端工程师',
             address: '西湖区湖底公园1号'
          }];
      let columns = [{
           title: '编号',
           dataIndex: 'key',
           key: 'key',
           },{
           title: '姓名',
           dataIndex: 'name',
           key: 'name',
           }, {
           title: '年龄',
           dataIndex: 'age',
           key: 'age',
           }, {
           title: '生日',
           dataIndex: 'birthday',
           key: 'birthday',
           }, {
           title: '职务',
           dataIndex: 'job',
           key: 'job',
           },{
           title: '住址',
           dataIndex: 'address',
           key: 'address',
           }, {
           title: '操作',
           dataIndex: 'operate',
           key: 'operate',
       }];

        return (
            <div>
                <Table dataSource={dataSource} columns={columns} renderRow={this._renderRow}/>
            </div>
        );
    }
}

export default connect()(TableList);