import mysql from 'mysql'
import * as dotenv from 'dotenv'
dotenv.config()

export const db = mysql.createConnection({
 host: "localhost",
 user: "root",
 database: "auth",
 password: process.env.DB_KEY
})