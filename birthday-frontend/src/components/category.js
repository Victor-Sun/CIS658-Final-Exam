import React from 'react';
import CategoryFrom from './category_form';
import CategoryList from './category_list';
import axios from 'axios';
const API_BASE = "http://localhost:3000";

class Categories extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			categories: [],
		};
		this.loadCategories = this.loadCategories.bind(this);
		this.removeCategory = this.removeCategory.bind(this);
		this.addCategory = this.addCategory.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
	}
	
	//     loadCategories(){
	//         this.setState({
	//             categories: [
	//                 {id:1, category: "Friend"},
	//                 {id:2, category: "Family"},
	//                 {id:3, category: "Coleague"},
	//             ]
	//         });
	//     }
	
	updateForm(mode, categoryVals){
		this.setState({
			category: Object.assign({}, categoryVals),
			formMode: mode,
		});
	}
	
	clearForm(){
		console.log("clear form");
		this.updateForm("new",{category:""});
	}
	
	formSubmitted(category){
		if(this.state.formMode === "new"){
			this.addCategory(category);
		} else {
			this.updateCategory(category);
		}
		this.clearForm();
	}
	
	loadCategories(){
		axios.get(`${API_BASE}/categories`).then(res => {
			this.setState({
				categories: res.data
			});
			console.log(`Data loaded! = ${this.state.categories}`)
		})
		.catch(err => console.log(err));
	}
	
	addCategory(newCategory){
		axios.post(`${API_BASE/categories}`,newCategory).then(res => {
			res.data.key = res.data.id;
			this.setState({
				categories: [...this.state.categories, res.data]
			})
		});
	}
	
	updateCategory(category){
		axios.put('${API_BASE/categories/${category.id}', category).then(res => {
			this.loadCategories();
		})
		.catch(err => console.log(err));
	}
	
	removeCategory(id){
		let filteredArray = this.state.categories.filter(item => item.id !== id)
		this.setState({categories: filteredArray});
		axios.delete('${API_BASE/categories/${id}}').then(res => {
			console.log('Record Deleted');
		})
		.catch(err => console.log(err));
	}
	
	componentDidMount(){
		this.loadCategories();
	}
	
	render(){
		return (
			<div className = "categories">
			<CategoryForm
			onSubmit={(category) => this.formSubmitted(category)}
			onCancel={(mode,category) => this.updateForm(mode,category)}
			formMode={this.state.formMode}
			category={this.state.category}
			/>
			
			<CategoryList
			categories={this.state.categories}
			onDelete={(id) => this.removeCategory(id)}
			onEdit={(mode,category) => this.updateForm(mode,category)}
			/>
			</div>
		);
	}
}