import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addstudent = (props) => {
    var [input, setInput] = useState(props.data)
    console.log("add page props" + props.data)

    const inputHandler = (e) => {
        const { name, value } = e.target
        setInput({ ...input, [name]: value });
    }
    const readValues = () => {

        if(props.method === "post"){
            axios.post("http://localhost:3005/students", input)
            .then(response => {
                alert("Successfully posted")
            })
            .catch(err => console.log(err))
        }else if(props.method === "put"){
            axios.put("http://localhost:3005/students/"+input.id,input)
            .then((response)=>{
                alert("Successfully Updated!")
                window.location.reload(false);
            })
        }
    }
    return (
        <div>
            <br /><br /><br />
            <TextField sx={{
                "& .MuiFormLabel-root.Mui-focused": {
                    color: "rgb(182,158,221)"
                }}} label='Name' name='name' value={input.name} onChange={inputHandler}></TextField>
            <br /><br /><br />
            <TextField label="Grade" name='grade' value={input.grade} onChange={inputHandler}></TextField>
            <br /><br /><br />
            <Button id="nav" variant='contained' color='secondary' onClick={readValues}><Link to='/'>Submit</Link></Button>
        </div>
    )
}

export default Addstudent