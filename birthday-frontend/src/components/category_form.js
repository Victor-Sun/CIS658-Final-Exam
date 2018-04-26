import React from 'react';

class CategoryForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			category: "",
			id: 0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleCancel = this.handleCancel.bind(this);	
	}
	
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		
		this.setState({
		  [name]: value
		});
	}
	
	handleSubmit(event){
		this.props.onSubmit({
		  catgegory: this.state.catgegory,
		  id: this.state.id,
		});
    	event.preventDefault();
  	}
	
	handleCancel(event){
		this.props.onCancel("new", {category: "",});
		event.preventDefault();
	}
	
	componentWillReceiveProps(newProps){
		if (newProps.category != null) {
			this.setState({
				category: newProps.category.category,
				id: newProps.category.id,
			});
      	}
	}
	
	renderButtons() {
		if (this.props.formMode === "new") {
			return(
				<button type="submit" className="btn btn-primary">Create</button>
			);
		} else {
			return(
				<div className="form-group">
				<button type="submit" className="btn btn-primary">Save</button>
				<button type="submit" className="btn btn-danger" onClick={this.handleCancel} >Cancel</button>
				</div>
			);
		}
	}
	
	render(){
		return(
			<div className = "category-form">
				<h1> Categories </h1>
				<form onSubmit = {this.handleSubmit}>
					<div className = "form-group">
						<label> category </label>
						<input type = "text" className = "form-control" autoComplete = '' name = "category" id = "category" placeholder = "Category" value = {this.state.category} onChange = {this.handleInputChange}/>
					</div>
					{this.renderButtons()}
				</form>
			</div>
		);
	}
}

export default CategoryForm;