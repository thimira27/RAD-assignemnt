import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getTeachers, editTeacher } from '../../Service/api';

const initialValue = {
    name: '',
    phone: '',
    exyears: '',
    age: '',
    sub: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditTeacher = () => {
    const [teacher, setTeacher] = useState(initialValue);
    const { name, phone, exyears, age, sub } = teacher;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadUserDetails();
    }, []);

    const loadTeacherDetails = async() => {
        const response = await getTeachers(id);
        setTeacher(response.data);
    }

    const editTeacherDetails = async() => {
        const response = await editTeacher(id, teacher);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setTeacher({...teacher, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Full Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Years of Experience</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='exyears' value={exyears} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Subject/Profession</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='sub' value={sub} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editTeacherDetails()}>Edit Teacher</Button>
            </FormControl>
        </Container>
    )
}

export default EditTeacher;