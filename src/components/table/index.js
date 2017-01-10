import React, { Component } from 'react'

class Table extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: props.dataSource || [],
            columns: props.columns || []
        }
        this.renderRow = props.renderRow || null
    }

    onSelectAll() {
        for (let ref in this.refs) {
            if (ref!=='selectAll') {
                this.refs[ref].setState({checked:true})
            }
        }
    }

    offSelectAll() {
        for (let ref in this.refs) {
            if (ref!=='selectAll') {
                this.refs[ref].setState({checked:false})
            }
        }
    }

    _renderHead() {
        return this.state.columns.map((item,i) => {
            return [
                <th>
                    {i===0?<input type='checkbox' ref="selectAll"/>:''}
                        {item.title}
                </th>
            ]
        })
    }

    _renderBody() {
        let _renderRow = this.renderRow;
        return this.state.dataSource.map((item) => {
            return _renderRow && _renderRow(item)
        })
    }

    render() {
        let state = this.state;
        return (
            <div>
                <table>
                    <thead>
                        <tr>{this._renderHead()}</tr>
                    </thead>
                    <tbody>
                        {this._renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table