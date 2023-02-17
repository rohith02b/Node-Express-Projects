import React from "react";
import { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Add = () => {

    const[book,setBook] = useState({
        Title : "",
        Description : ""
    })

    const handleChange = (e) =>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        
        e.preventDefault()

        try{
            await axios.post("http://localhost:8800/books",book)
            navigate("/")
        }
        catch(err){
            console.log(err)
        }
    }


    return (
        <>
        <div className="auth my-5">
        <div className="display-4 text-center">Add Book</div>
        
        <div className="d-block m-3 ">
            Title
        <input type="text" className="d-block rounded-4 desc" name='Title' onChange={handleChange} />
        </div>

        <div className="d-block m-3 ">
           Description
        <textarea type="text" className="d-block rounded-4 desc" name='Description' onChange={handleChange} />
        </div>

        <div className="d-flex m-5 justify-content-evenly">
        <button className='btn btn-primary d-block rounded-4' onClick={handleClick}>Add</button>
        </div>
    </div>
    </>
    )
}

export default Add;