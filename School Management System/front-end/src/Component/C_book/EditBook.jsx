import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getBooks, editBook } from '../../service/api';

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
        margin-top: 20px
`;

const EditBook = () => {
    const [book, setBook] = useState(initialValue);
    const { name, isbn, author, copies } = book;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadBookDetails();
    }, []);

    const loadBookDetails = async() => {
        const response = await getBooks(id);
        setBook(response.data);
    }

    const editBookDetails = async() => {
        const response = await editBook(id, book);
        navigate('/books');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setBook({...book, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Book Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">ISBN No.</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='isbn' value={isbn} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Author</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='author' value={author} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">No. of Copies</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='copies' value={copies} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editBookDetails()}>Edit Book</Button>
            </FormControl>
        </Container>
    )
}

export default EditBook;