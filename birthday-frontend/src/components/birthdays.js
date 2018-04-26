import React from 'react';
import {Link} from 'react-router-dom';

const Birthdays = (props) => {
    return(
        <div className = "birthdays">
            <h1> Birthdays </h1>
            <Link to = {`/categories/${props.match.params.id}/birthdays/create`}>
                <button className = "btn btn-success btn-sm">
                    <i className = "glyphicon glyphicon-plus"></i> Create
                </button>
            </Link>
        </div>
    );
}

export default Birthdays;
