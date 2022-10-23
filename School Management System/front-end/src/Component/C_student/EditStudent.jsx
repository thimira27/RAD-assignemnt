import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getStudents, editStudent } from '../../service/api';

const initialValue = {
    name: '',
    dateofbirth: '',
    email: '',
    phone: '',
    address: '',
    gender: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditStudent = () => {
    const [student, setStudent] = useState(initialValue);
    const { name, dateofbirth, email, phone, address, gender } = student;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadStudentDetails();
    }, []);

    const loadStudentDetails = async() => {
        const response = await getStudents(id);
        setStudent(response.data);
    }

    const editStudentDetails = async() => {
        
        const response = await editStudent(id, student);
        navigate('/students');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setStudent({...student, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date of birth</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateofbirth' value={dateofbirth} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Address</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='address' value={address} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Gender</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='gender' value={gender} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editStudentDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditStudent;