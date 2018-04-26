import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
const API_BASE = 'http://localhost:3000';

const Birthdays = (props) => {
    return(
		<tr>
			<td className = "col-md-3">{props.name}</td>
			<td className = "col-md-3">{props.date}</td>
			<td className = "col-md-3 btn-toolbar">
				<Link to = {`/categories/${props.category_id}/birthdays/${props.id}`}>
					<button className = "btn btn-success btn-sm">
						<i className = "glyphicon glyphicon-pencil"></i> Edit
					</button>
				</Link>
				<button className = "btn btn-danger btn-sm" onClick = {event => props.onDelete(props.id)}>
					<i className = "glyphicon glyphicon-remove"></i> Delete
				</button>
			</td>
		</tr>
    );
}

class Birthdays extends React.Component {
	
	constructor(props){
		super(props);
		const id = props.match.paramd.id;
		this.state = {
			birthdays: [],
			birthday_id: id,
			birthday: {},
		};

		this.loadBirthdays = this.loadBirthdays.bind(this);
		this.deleteBirthdays = this.deleteBirthdays.bind(this);
	}

	loadBirthdays(){
	
	}
}

export default Birthdays;
