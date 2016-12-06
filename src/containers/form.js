import React,{ Component, PropTypes } from 'react'
import { Form, Icon, Input, Button } from 'antd';
import { connect } from 'react-redux'
const FormItem = Form.Item;

const renderField = ({ input, label, type, meta: { touched, error } }) => (
	<div>
		<label className="input-label">{label}</label>
		<div>
			<input className="form-control" {...input} placeholder={label} type={type}/>
			{touched && error && <span>{error}</span>}
		</div>
	</div>
)


class HorizontalForm extends Component {
	constructor(props) {
		super(props)
	}
	
	render() {
		const { editStatus, onAdd, onEdit, handleSubmit, initialValues, error, pristine, reset, submitting } = this.props
		return (
			<div className="right-container">
				<div className="right-header">
					<div className="right-title clearfix">
						<i className="glyphicon glyphicon-share-alt float-right" onClick={() => editStatus(false)}></i>
						<h2 className="title-info">表单</h2>
					</div>
				</div>
				<div className="right-content">
					<form>
						<div>
							<label className="input-label">用户名</label>
							<div>
								<input className="form-control" placeholder="用户名" type="text"/>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default HorizontalForm