import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getLabItems, deleteLabItem } from '../../service/api';
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

const AllLabItems = () => {
    const [labitems, setLabItems] = useState([]);
    
    useEffect(() => {
        getAllLabItems();
    }, []);

    const deleteLabItemData = async (id) => {
        await deleteLabItem(id);
        getAllLabItems();
    }

    const getAllLabItems = async () => {
        let response = await getLabItems();
        setLabItems(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Item Code</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Count</TableCell>
                    <TableCell>Lab Number</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {labitems.map((labitem) => (
                    <TRow key={labitem.id}>
                        <TableCell>{labitem._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{labitem.itemCode}</TableCell>
                        <TableCell>{labitem.name}</TableCell>
                        <TableCell>{labitem.description}</TableCell>
                        <TableCell>{labitem.count}</TableCell>
                        <TableCell>{labitem.labno}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editLabItem/${labitem._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteLabItemData(labitem._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllLabItems;