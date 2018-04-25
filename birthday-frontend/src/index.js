import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const CategoryForm = (props) => {
    return (
        <div className = "category-form">
            The category goes here
        </div>
    );
}

const CategoryList = (props) => {
    return (
        <div className = "category-list">
            The category list goes heres
        </div>
    );
}

class Categories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [],
        };
    }

    render(){
        return (
            <div className = "categories">
                <CategoryForm />
                <CategoryList />
            </div>
        );
    }
}

ReactDOM.render(<Categories />, document.getElementById('root'));
registerServiceWorker();
