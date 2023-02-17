import axios from "axios"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const Update = () =>{

    const [book, setBook] = useState({
        Title: "",
        Description: ""
      });
      const [setError] = useState(false)
    
      const location = useLocation();
      const navigate = useNavigate();
    
      const bookId = location.pathname.split("/")[2];
    
      const handleChange = (e) =>{
        setBook(prev=>({...prev, [e.target.name]: e.target.value}))
    }
    
      const handleClick = async (e) => {
        // e.preventDefault();
    
        try {
          await axios.put(`http://localhost:8800/books/${bookId}`, book);
          navigate("/")
        } catch (err) {
          console.log(err)
          setError(true)
        }
      };
    
    return(
        <>
        <div className="auth my-5">
            <div className="display-4 text-center">Update Book</div>
        
            <div className="d-block m-3 ">
                Title
            <input type="text" className="d-block rounded-4 desc" name='Title' onChange={handleChange} />
            </div>

            <div className="d-block m-3 ">
                Description
            <textarea type="text" className="d-block rounded-4 desc" name='Description' onChange={handleChange}/>
            </div>

            <div className="d-flex m-5 justify-content-evenly">
            <button className='btn btn-primary d-block rounded-4' onClick={handleClick}>Update</button>
            </div>
        </div>
        </>
    )
}

export default Update