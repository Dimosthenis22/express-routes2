import express from 'express';

let router = express.Router();

router
.get('/',(req,res)=>{
    res.send("This is GET/POST/PUT/DELETE request respectively.")
})
.post('/',(req,res)=>{
    res.send("This is GET/POST/PUT/DELETE request respectively.")
})
.put('/',(req,res)=>{
    res.send("This is GET/POST/PUT/DELETE request respectively.")
})
.delete('/',(req,res)=>{
    res.send("This is GET/POST/PUT/DELETE request respectively.")
})

export default router;