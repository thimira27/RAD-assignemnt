import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getSubjects, deleteSubject } from '../../service/api';
import { Link } from 'react-router-dom';
import { useSyncExternalStore } from 'react';

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

const AllSubjects = () => {
    const [subject, setSubjects] = useState([]);
    
    useEffect(() => {
        getAllSubjects();
    }, []);

    const deleteSubjectData = async (id) => {
        await deleteSubject(id);
        getAllSubjects();
    }

    const getAllSubjects = async () => {
        let response = await getSubjects();
        setSubjects(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Subject Name</TableCell>
                    <TableCell>Number Of Credits</TableCell>
                    <TableCell>Teach By</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {subject.map((subject) => (
                    <TRow key={subject.id}>
                        <TableCell>{subject._id}</TableCell> {/* change it to subject.id to use JSON Server */}
                        <TableCell>{subject.subName}</TableCell>
                        <TableCell>{subject.numberOfCredits}</TableCell>
                        <TableCell>{subject.teachBy}</TableCell>
                        <TableCell>{subject.medium}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit_Subject/${subject._id}`}>Edit</Button> {/* change it to subject.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteSubjectData(subject._id)}>Delete</Button> {/* change it to subject.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllSubjects;