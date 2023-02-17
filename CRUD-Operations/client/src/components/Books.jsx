import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Books =() =>
{
    const [books,setBooks] = useState([])
    
    useEffect(()=>{
        const FetchAllBooks = async ()=>{
            try{
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data)
            }
            catch(err){
                console.log(err)
            }
        }

        FetchAllBooks()
    },[])

    const handleDelete = async (ID)=>{
        try{
            await axios.delete("http://localhost:8800/books/"+ID)
            window.location.reload()
        }
        catch(err)
        {
            console.log(err)
        }
    }


    return (
            <>
                <div className='d-flex justify-content-evenly'>
                <div className="display-5 text-dark m-5 text-center">BOOK MANAGEMENT</div>
                <div className='display-5 m-5 text-center'>
                    <Link to= {"/add"}>
                        <button className='btn btn-outline-dark'>+</button>
                    </Link>
                </div>
                </div>
                <div className="container">
                <div className='row'>
                    {books.map((book) =>(
                            <div className="col-6 col-sm-4 col-lg-3 my-4" key={book.ID}>
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{book.Title}</h5>
                                        <p className="card-text">{book.Description}</p>
                                        
                                        <Link to = {`/update/${book.ID}`}>
                                        <button className="btn btn-primary mx-2 my-2 my-xxl-0">Update Book</button>    
                                        </Link>
                                        
                                        <button className="btn btn-danger mx-2 my-2 my-xxl-0" onClick={()=>handleDelete(book.ID)}>Delete Book</button>
                                    </div>
                                </div>
                            </div>
                    ))}
                </div>
                </div>
            </>     
    )
}

export default Books;