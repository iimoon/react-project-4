import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstudent = () => {
    var [input, setInput] = useState({
        name: '',
        grade: ''
    })
    const inputHandler = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value });
    }
    const readValues = () => {
        axios.post("http://localhost:3000/students",input)
        .then(response=>{
            alert("Successfully posted")
        })
        .catch(err=>console.log(err))
    }
    return (
        <div>
            <br /><br /><br />
            <TextField label='Name' name='name' value={input.name} onChange={inputHandler}></TextField>
            <br /><br /><br />
            <TextField label="Grade" name='grade'value={input.grade} onChange={inputHandler}></TextField>
            <br /><br /><br />
            <Button variant='contained' color='secondary' onClick={readValues}>Submit</Button>
        </div>
    )
}

export default Addstudent