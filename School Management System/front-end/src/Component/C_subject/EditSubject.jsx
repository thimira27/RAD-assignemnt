import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getSubjects, editSubject } from '../../service/api';

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
        margin-top: 20px
`;

const EditSubject = () => {
    const [subject, setSubject] = useState(initialValue);
    const { subName, numberOfCredits, teachBy, medium } = subject;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadSubjectDetails();
    }, []);

    const loadSubjectDetails = async() => {
        const response = await getSubjects(id);
        setSubject(response.data);
    }

    const editSubjectDetails = async() => {
        const response = await editSubject(id, subject);
        navigate('/subjects');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setSubject({...subject, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Subject Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='subName' value={subName} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Number Of Credits</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='numberOfCredits' value={numberOfCredits} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Teach By</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='teachBy' value={teachBy} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Medium</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='medium' value={medium} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editSubjectDetails()}>Edit Subject</Button>
            </FormControl>
        </Container>
    )
}

export default EditSubject;