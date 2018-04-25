import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const CategoryForm = (props) => {
    return (
        <div className = "category-form">
            The category goes here
        </div>
    );
}

const CategoryListItem = (props) => {
    return (
        <tr>
            <td className = "col-md-3">{props.category}</td>
            <td className = "col-md-3 btn-toolbar">
                <button className = "btn btn-success btn-sm" onClick = {event => props.onEdit("edit", props)}>
                    <i className = "glyphicon glyphicon-pencil"></i> Edit
                </button>
                <button className = "btn btn-danger btn-sm" onClick = {event => props.onDelete(props.id)}>
                    <i className = "glyphicon glyphicon-remove"></i> Delete
                </button>
            </td>
        </tr>
    )
}

const CategoryList = (props) => {
    const categoryItems = props.categorys.map((category) => {
        return (
            <CategoryListItem
                category = {category.category}
                id = {category.id}
                key = {category.id}
                onDelete = {props.onDelete}
                onEdit = {props.onEdit}
            />
        )
    });

    return (
        <div className = "category-list">
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th className = "col-md-3">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryItems}
                </tbody>
            </table>
        </div>
    );
}

class Categorys extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categorys: [],
        };
        this.loadCategorys = this.loadCategorys.bind(this);
    }

    loadCategorys(){
        this.setState({
            categorys: [
                {category: "Friend"},
                {category: "Family"},
                {category: "Coleague"},
            ]
        });
    }

    componentDidMount(){
        this.loadCategorys();
    }

    render(){
        return (
            <div className = "categorys">
                <CategoryForm />
                <CategoryList categorys = {this.state.categorys}/>
            </div>
        );
    }
}

ReactDOM.render(<Categorys />, document.getElementById('root'));
registerServiceWorker();
