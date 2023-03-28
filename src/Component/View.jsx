import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import { Button } from '@mui/material';
import Addstudent from './Addstudent';

const View = () => {
    var [update, setUpdate] = useState(false)
    var [selected, setSelected] = useState([])
    var [students, setStudents] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3005/students")
            .then(response => {
                setStudents(response.data);
                console.log(response.data);
            })
            .catch(error => console.log(error))
    }, [])
    const deleteValues = (id) => {
        axios.delete("http://localhost:3005/students/" + id)
            .then((response) => {
                alert("successfully delete")
                window.location.reload(false)
            })
    }
    const updateValues = (value) => {
        setSelected(value);
        setUpdate(true);
    }
    var finalJSX = <TableContainer>
        <Table className='table-main'>
            <TableHead>
                <TableRow>
                    <TableCell id="table-h" sx={{width:'10px'}}>ID</TableCell>
                    <TableCell id="table-h">Name</TableCell>
                    <TableCell id="table-h">Grade</TableCell>
                    <TableCell id="table-h">Update</TableCell>
                    <TableCell id="table-h">Delete</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {students.map((value, index) => {
                    return <TableRow>
                        <TableCell id="table">{value.id}</TableCell>
                        <TableCell id="table-c">{value.name}</TableCell>
                        <TableCell id="table">{value.grade}</TableCell>
                        <TableCell id="table-c"><Button variant='outlined' color='success' onClick={() => updateValues(value)}>Update</Button></TableCell>
                        <TableCell id="table"><Button variant='contained' color='error' onClick={() => deleteValues(value.id)}>Delete</Button></TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
    </TableContainer>

    if(update)
                finalJSX = <Addstudent data={selected} method="put"/>

    return (
        <div>
            <br/><br/>
            {finalJSX}
        </div>
        
    )
}
export default View
