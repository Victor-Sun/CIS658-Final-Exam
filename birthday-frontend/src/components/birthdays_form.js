import React from 'react';
import axios from 'axios';

const API_BASE = "http://cis658-final-exam-mynameisvictor163100.codeanyapp.com:3000";

class BirthdayForm extends React.Component{
	
	constructor(props){
		const id = props.match.params.id;
		const createMode = (props.match.path.endsWith("create")) ? true : false;
		
		super(props);
		this.state = {
			name: "",
			date : "",
			category_id: id,
			birthday_id: createMode ? 0 : props.match.params.bid,
			createMode: createMode
		};
		
		this.handleInputChange = this.handleInputChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleCancel = this.handleCancel.bind(this);
		
		if(!createMode){
			axios.get(`${API_BASE}/categories/${this.state.category_id}/birthdays/${this.state.birthday_id}`).then(res => {
				console.log("birthday fetched");
				this.setState({
					name: res.data.name,
					date: res.data.date
				})
			})
			.catch(err => console.log(err));
		}
	}
	
	addBirthday(newBirthday){
		console.log(`posting birthday with name ${newBirthday.name}`);
		axios.post(`${API_BASE}/categories/${newBirthday.category_id}/birthdays`, newBirthday).then(res => {
			console.log('Posted!');
			this.props.history.goBack();
		})
		.catch(err => console.log(err));
	}
	
	updateBirthday(birthday){
		axios.put(`${API_BASE}/categories/${birthday.category_id}/birthdays/${birthday.birthday_id}`, birthday).then(res => {
			this.props.history.goBack();
		})
		.catch(err => console.log(err));
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
		const birthday = {
		  name: this.state.name,
		  date: this.state.date,
		  category_id: this.state.category_id,
		  birthday_id: this.state.birthday_id
		}
		
		if (this.state.createMode) {
		  this.addBirthday(birthday);
		} else {
		  this.updateBirthday(birthday);
		}
		event.preventDefault();
	}
	
	handleCancel(event){
		console.log("canceled pressed.")
		this.props.history.goBack();
		event.preventDefault();
	}
	
	render(){
		return (
			<div>
				<h1>
					{this.state.createMode ? "Create Birthday" : "Edit Birthday"}
				</h1>
				<div className="author-form">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Name</label>
							<input type="text" className="form-control" name="name" id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange}/>
						</div>
						<div className="form-group">
							<label htmlFor="date">Birthdate</label>
							<input type="date" className="form-control" name="date" id="date" placeholder="Enter date" value={this.state.date} onChange={this.handleInputChange}/>
						</div>
						<div className="form-group">
							<button type="submit" className="btn btn-primary">{this.state.createMode ? "Create" : "Save"}</button>
							<button type="submit" className="btn btn-danger" onClick={this.handleCancel} >Cancel</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default BirthdayForm;
