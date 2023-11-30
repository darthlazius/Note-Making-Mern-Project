import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateNote = (props) => {
 
  const navigate = useNavigate();
  const [note, setNote] = useState({
    title: '',
    description: '',
    tag: ''
});

const onChange = (e) => {
    setNote({
        ...note,
        [e.target.name]: e.target.value
    })
}

const onSubmit = (e)=>{
    e.preventDefault();


axios.post("http://localhost:5000/api/notes/", note)
.then((res)=>{
    setNote({
        title: '',
        description: '',
        tag: ''
    });
navigate("/");

})

.catch((err)=>{
    console.log("Error in CreateNote");
})

};

return (
    <div className = "CreateNote">
    <div class = "container">
        <div className = 'row'>
        <div className = 'col-md-8 m-auto'>
         <br />
            <Link to = "/" className = "btn btn-outline-warning float-left"> 
            Show Notes
            </Link>
            </div>
            <div className = "col-md-8 m-auto">
                <h1 className = "display-4 text-center">Add Note</h1>
                <p className = "lead text-center">
                    Create new note
                </p>

                <form onSubmit = {onSubmit}>
                    <div className = 'form-group'>
                        <input
                        type = 'text'
                        placeholder = 'Title of the Note'
                        name = 'title'
                        className = 'form-control'
                        value = {note.title}
                        onChange = {onChange}
                        />
                    </div>
                    <br />

                    <div className = 'form-group'>
                        <input
                        type = 'text'
                        placeholder = 'Tag'
                        name = 'tag'
                        className = 'form-control'
                        value = {note.tag}
                        onChange = {onChange}
                        />
                    </div>

                    <div className = 'form-group'>
                        <textarea
                        type = 'text'
                        placeholder = 'Description'
                        name = 'description'
                        className = 'form-control'
                        value = {note.description}
                        onChange = {onChange}
                        />
                    </div>

                    <input
                    type = "submit"
                    className = "btn btn-outline-warning btn-block mt-4"
                    />
                </form>  
        </div>
    </div>
</div>
</div>
)

}
export default CreateNote;