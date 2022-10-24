import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getTeachers, deleteTeacher, editTeacher } from '../../service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 100%;
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

const AllTeachers = () => {
    const [teachers, setTeachers] = useState([]);
    
    useEffect(() => {
        getAllTeachers();
    }, []);

    const deleteTeacherData = async (id) => {
        await deleteTeacher(id);
        getAllTeachers();
    }

    const getAllTeachers = async () => {
        let response = await getTeachers();
        setTeachers(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Full Name</TableCell>
                    <TableCell>Contact Number</TableCell>
                    <TableCell>Years of Experience</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Subject/Profession</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {teachers.map((teacher) => (
                    <TRow key={teacher.id}>
                        <TableCell>{teacher._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{teacher.name}</TableCell>
                        <TableCell>{teacher.phone}</TableCell>
                        <TableCell>{teacher.exyears}</TableCell>
                        <TableCell>{teacher.age}</TableCell>
                        <TableCell>{teacher.sub}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editTeacher/${teacher._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteTeacherData(teacher._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllTeachers;