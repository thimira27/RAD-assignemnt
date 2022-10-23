import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import {getStudents, deleteStudent } from '../../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;

const AllStudents = () => {
    const [students, setStudents] = useState([]);
    
    useEffect(() => {
        getAllStudents();
    }, []);

    const deleteStudentData = async (id) => {
        await deleteStudent(id);
        getAllStudents();
    }

    const getAllStudents = async () => {
        let response = await getStudents();
        setStudents(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Date of Birth</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {students.map((student) => (
                    <TRow key={student.id}>
                        <TableCell>{student._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.dateofbirth}</TableCell>
                        <TableCell>{student.email}</TableCell>
                        <TableCell>{student.phone}</TableCell>
                        <TableCell>{student.address}</TableCell>
                        <TableCell>{student.gender}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editStudent/${student._id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deleteStudentData(student._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllStudents;