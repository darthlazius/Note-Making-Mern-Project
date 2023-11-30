import React, {useState,useEffect} from "react";
import {Link,useParams,useNavigate} from "react-router-dom";
import axios from 'axios';

function UpdateNotes(props){
    const [note,setNote] = useState({
        title:"",
        description:"",
        tag:""
    });
    const {id} = useParams();
    const navigate = useNavigate();

useEffect(()=>{
    axios.get(`http://localhost:5000/api/notes/${id}`)
    .then((res)=>{
        setNote({
            title: res.data.title,
            description: res.data.description,
            tag: res.data.tag
        })
        
    })
   .catch((err)=>{
    console.log("Error from UpdateNotes");
   })
},[id]);


const onChange = (e)=>{
    setNote({
        ...note,
        [e.target.name]:e.target.value
    });

}
const onSubmit = (e)=>{
    e.preventDefault();

    const data = {
        title:note.title,
        description:note.description,
        tag:note.tag
    
    }

    axios.put(`http://localhost:5000/api/notes/${id}`,data)
    .then((res)=>{
        navigate(`/show-notes/${id}`)
    })
    .catch((err)=>{
        console.log('Error in UpdateNotes')
    })

}
    return (
        <div className = "UpdateNotes">
            <div className = "container">
                <div className = "row">
                    <div className = "col-md-8 m-auto">
                        <br/>
                        <Link to = "/" className = "btn btn-outline-warning float-left">
                            Show Notes
                        </Link>
                    </div>
                    <div className = "col-md-8 m-auto">
                        <h1 className = "display-4 text-center">
                            Edit Note
                        </h1>
                        <p className = "lead text-center">
                            Update Note
                        </p>
                    </div>
                </div>

                <div className = "col-md-8 m-auto">
                    <form noValidate onSubmit = {onSubmit}>
                        <div className = 'form-group'>
                            <label htmlFor = 'title'>Title</label>
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
                            <label htmlFor = 'tag'>Tag</label>
                            <input
                            type = 'text'
                            placeholder = 'Tag'
                            name = 'tag'
                            className = 'form-control'
                            value = {note.tag}
                            onChange = {onChange}
                            />
                        </div>
                        <br />

                        <div className = 'form-group'>
                            <label htmlFor = 'description'>Description</label>
                            <input
                            type = 'text'
                            placeholder = 'Add description'
                            name = 'description'
                            className = 'form-control'
                            value = {note.description}
                            onChange = {onChange}
                            />
                        </div>
                        <br />
                        <button type = 'submit' className = 'btn btn-outline-info btn-lg btn-block'>Submit Changes</button>
                    </form>

                </div>


            </div>
        </div>
    )
}
    
    export default UpdateNotes;