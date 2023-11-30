import React from 'react';
import {Link} from 'react-router-dom';

const Card = (props) => {
    const note = props.note;
    return (
       <div className = 'card-container'>
        <div className = 'desc'>
            <h2>
            <Link to={`/show-note/${note._id}`}>{note.title}</Link>
            </h2>
            <h3>{note.tag}</h3>
            <p>{note.description}</p>

        </div>
       </div>
    )
    }
    export default Card;

    