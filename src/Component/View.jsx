import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Button } from '@mui/material';

const View = () => {
    var[students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3000/students")
        .then(response=>{
            setStudents(students=response.data);
            console.log(response.data);
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValues = (id)=>{
        axios.delete("http://localhost:3000/students/"+id)
        .then((response)=>{
            alert("successfully delete")
            window.location.reload(false)
        })
    const updateValues = (id) =>{
        axios.update("http://localhost:3000/students/"+id)
        .then((response)=>{})
    }
    }
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Grade</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead> 
                <TableBody>
                    {students.map((value,index)=>{
                        return<TableRow>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.grade}</TableCell>
                            <TableCell><Button variant='contained' color='success'>Update</Button></TableCell>
                            <TableCell><Button variant='contained' color='error' onClick={()=>deleteValues(value.id)}>Delete</Button></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
)
}
export default View
