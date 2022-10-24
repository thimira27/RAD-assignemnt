import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addTeacher } from '../../service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddTeacher = () => {
    const [teacher, setTeacher] = useState(initialValue);
    const { name, phone, exyears, age, sub } = teacher;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setTeacher({...teacher, [e.target.name]: e.target.value})
    }

    const addTeacherDetails = async() => {
        await addTeacher(teacher);
        navigate('/teachers');
    }

    return (
        <Container>
            <Typography variant="h4">Add Teacher</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Full Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Contact Number</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Years of Experience</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='exyears' value={exyears} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Teaching Subject / Profession</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='sub' value={sub} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addTeacherDetails()}>Add Teacher</Button>
            </FormControl>
        </Container>
    )
}

export default AddTeacher;