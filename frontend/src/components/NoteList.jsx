import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import Card from './Card';

function NoteList() {
  const [note, setNote] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/notes')
      .then((res) => {
        setNote(res.data);
      })
      .catch((err) => {
        console.log('Error from NoteList');
      });
  }, []);

  const NoteList =
    note.length === 0
      ? 'there is no note record!'
      : note.map((note, k) => <Card note={note} key={k} />);

  return (
    <div className='NoteList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Notes List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-note'
              className='btn btn-outline-warning float-right'
            >
              + Add New Note
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>

        <div className='list'>{NoteList}</div>
      </div>
    </div>
  );
}

export default NoteList;
