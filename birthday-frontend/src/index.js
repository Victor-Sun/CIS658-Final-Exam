import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

const BirthdayForm = (props) => {
    return (
        <div className = "birthday-form">
            The birthday goes here
        </div>
    );
}

const BirthdayListItem = (props) => {
    return (
        <tr>
            <td className = "col-md-3">{props.birthday}</td>
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

const BirthdayList = (props) => {
    const birthdayItems = props.birthdays.map((birthday) => {
        return (
            <BirthdayListItem
                name = {birthday.name}
                date = {birthday.date}
                id = {birthday.id}
                key = {birthday.id}
                onDelete = {props.onDelete}
                onEdit = {props.onEdit}
            />
        )
    });

    return (
        <div className = "birthday-list">
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th className = "col-md-3">Name</th>
                        <th className = "col-md-3">Date</th>
                        <th className = "col-md-3">Category</th>
                    </tr>
                </thead>
                <tbody>
                    {birthdayItems}
                </tbody>
            </table>
        </div>
    );
}

class Birthdays extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            birthdays: [],
        };
        this.loadBirthdays = this.loadBirthdays.bind(this);
    }

    loadBirthdays(){
        this.setState({
            birthdays: [
                {name: "John", date: "5/16/2000"},
                {name: "Jane", date: "4/1/1999"},
                {name: "Victor", date: "12/10/1991"},
            ]
        });
    }

    componentDidMount(){
        this.loadBirthdays();
    }

    render(){
        return (
            <div className = "birthdays">
                <BirthdayForm />
                <BirthdayList birthdays = {this.state.birthdays}/>
            </div>
        );
    }
}

ReactDOM.render(<Birthdays />, document.getElementById('root'));
registerServiceWorker();
