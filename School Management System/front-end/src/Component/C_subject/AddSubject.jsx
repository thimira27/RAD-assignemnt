import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addSubject } from '../../service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    subName: '',
    numberOfCredits: '',
    teachBy: '',
    medium: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddSubject = () => {
    const [subject, setSubject] = useState(initialValue);
    const { subName, numberOfCredits, teachBy, medium } = subject;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setSubject({...subject, [e.target.name]: e.target.value})
    }

    const addSubjectDetails = async() => {
        await addSubject(subject);
        navigate('/subjects');
    }

    return (
        <Container>
            <Typography variant="h4">Add Subject</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Subject Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='subName' value={subName} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Number Of Credits</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='numberOfCredits' value={numberOfCredits} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Teach By</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='teachBy' value={teachBy} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Medium</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='medium' value={medium} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addSubjectDetails()}>Add Subject</Button>
            </FormControl>
        </Container>
    )
}

export default AddSubject;