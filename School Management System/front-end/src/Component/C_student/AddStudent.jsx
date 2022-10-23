import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addStudent } from '../../service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddStudent = () => {
    const [student, setStudent] = useState(initialValue);
    const { name, dateofbirth, email, phone, address, gender } = student;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value})
    }

    const addStudentDetails = async() => {
        await addStudent(student);
        navigate('/students');
    }

    return (
        <Container>
            <Typography variant="h4">Add Student</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addStudentDetails()}>Add Student</Button>
            </FormControl>
        </Container>
    )
}

export default AddStudent;