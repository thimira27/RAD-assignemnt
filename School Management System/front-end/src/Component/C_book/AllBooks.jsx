import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, styled } from '@mui/material'
import { getBooks, deleteBook } from '../../service/api';
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

const AllBooks = () => {
    const [books, setBooks] = useState([]);
    
    useEffect(() => {
        getAllBooks();
    }, []);

    const deleteBookData = async (id) => {
        await deleteBook(id);
        getAllBooks();
    }

    const getAllBooks = async () => {
        let response = await getBooks();
        setBooks(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>ISBN No.</TableCell>
                    <TableCell>Author</TableCell>
                    <TableCell>No. of Copies</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {books.map((book) => (
                    <TRow key={book.id}>
                        <TableCell>{book._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{book.name}</TableCell>
                        <TableCell>{book.isbn}</TableCell>
                        <TableCell>{book.author}</TableCell>
                        <TableCell>{book.copies}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/editBook/${book._id}`}>Edit</Button> {/* change it to user.id to use JSON Server */}
                            <Button color="secondary" variant="contained" onClick={() => deleteBookData(book._id)}>Delete</Button> {/* change it to user.id to use JSON Server */}
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllBooks;