import Express from "express"
import Mysql from "mysql"
import cors from 'cors'
import * as dotenv from 'dotenv'
dotenv.config()


const app = Express()
app.use(Express.json())
app.use(cors())


const db = Mysql.createConnection({
    host : process.env.host,
    user: process.env.user,
    password : process.env.password,
    database : process.env.database
})

app.get("/" , (req,res) => {
    res.json("Hello this is backend")
})

app.get("/books" , (req,res) => {
    const q = "SELECT * from Books order by ID DESC;"
    db.query(q , (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/books" , (req,res) => {
    const q = "insert into Books (`Title`,`Description`) values (?);"
    const values = [
        req.body.Title,
        req.body.Description
    ]
    
    db.query(q ,[values] , (err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.delete("/books/:id" , (req,res) =>{
    const bookId = req.params.id
    const q = "delete from Books where ID= ?"

    db.query(q,[bookId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Book has been deleted Successfully")
    })
})

app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "update Books set Title= ?, Description= ? where id = ? ;";
  
    const values = [
      req.body.Title,
      req.body.Description,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    })
  })

app.listen(8800 , ()=>{
    console.log("Working")
})