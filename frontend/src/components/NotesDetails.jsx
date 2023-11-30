import React ,{useState,useEffect} from 'react';
import {Link,useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';


function NotesDetails(props){
    const [note,setNote] = useState({})
    const {id} = useParams();
    const navigate = useNavigate();



useEffect(()=>{
    axios.
    get('http://localhost:5000/api/notes/${id}')
    .then((res)=>{
        setNote(res.data);
    })
    .catch((err)=>{
        console.log("Error from NotesDetails");
    })
},[id]);

const onDeleteClick = (id)=>{
    axios.delete('http://localhost:5000/api/notes/id')
    .then((res)=>{
        navigate("/");
    })
    .catch((err)=>{
        console.log("Error form NotesDetails_deleteClick");
    })
}

const NoteItem = (
    <div>
        <table className = "table table-hover table-dark">
            <tbody>
                <tr>
                    <th scope = "row">1</th>
                    <td>Title</td>
                    <td>{note.title}</td>
                </tr>
                <tr>
                    <th scope = "row">2</th>
                    <td>Description</td>
                    <td>{note.description}</td>
                </tr>
                <tr>
                    <th scope = "row">3</th>
                    <td>Tag</td>
                    <td>{note.tag}</td>
                </tr>
            </tbody>
            </table>
    </div>
);

return (
    <div className = "ShowNoteList">
        <div className = "container">
            <div className = "row">
                <div className = "col-md-10 m-auto">
                    <br />
                    <Link to = "/" className = "btn btn-outline-warning float-left">
                        Show Notes
                    </Link>
                </div>
                <br />
                <div className = "col-md-8 m-auto">
                    <h1 className = "display-4 text-center">Note's Record</h1>
                    <p className = "lead text-center">
                        View Note's Info
                    </p>
                    <hr /> <br />
                </div>
                <div classname = 'col-md-10 m-auto'>
                    {NoteItem}</div>
                    <button
              type='button'
              className='btn btn-outline-danger btn-lg btn-block'
              onClick={() => {
                onDeleteClick(note._id);
              }}
            >
              Delete Note</button>
          </div>

          <div className='col-md-6 m-auto'>
            <Link
              to={`/edit-note/${note._id}`}
              className='btn btn-outline-info btn-lg btn-block'
            >
              Edit Note
            </Link>
          </div> 
        
    </div>
</div>

        
)

            }

export default NotesDetails;