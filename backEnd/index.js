import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const myApp = express()

console.log('ppd thudangi');


myApp.listen(process.env.PORT,()=>{
    console.log('server started');
    
})