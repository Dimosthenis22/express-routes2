import express from 'express';

let router = express.Router();

router.route('/')
.get((req,res)=>{
    res.send("This is GET request respectively.")
})
.post((req,res)=>{
    res.send("This is POST request respectively.")
})
.put((req,res)=>{
    res.send("This is PUT request respectively.")
})
.delete((req,res)=>{
    res.send("This is DELETE request respectively.")
})

export default router;