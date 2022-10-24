import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addBook } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    isbn: '',
    author: '',
    copies: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddBook = () => {
    const [book, setBook] = useState(initialValue);
    const { name, isbn, author, copies } = book;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setBook({...book, [e.target.name]: e.target.value})
    }

    const addBookDetails = async() => {
        await addBook(book);
        navigate('/books');
    }

    return (
        <Container>
            <Typography variant="h4">Add Book</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ISBN Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='isbn' value={isbn} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Author</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Number of Copies</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='copies' value={copies} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addBookDetails()}>Add Book</Button>
            </FormControl>
        </Container>
    )
}

export default AddBook;