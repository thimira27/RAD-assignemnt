import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getLabItems, editLabItem } from '../../service/api';

const initialValue = {
    itemCode:'',
    name: '',
    description: '',
    count: '',
    labno: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px
`;

const EditLabItems = () => {
    const [labitem, setLabItem] = useState(initialValue);
    const { itemCode, name, description, count, labno} = labitem;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadLAbItemDetails();
    }, []);

    const loadLAbItemDetails = async() => {
        const response = await getLabItems(id);
        setLabItem(response.data);
    }

    const editLabItemDetails = async() => {
        const response = await editLabItem(id, labitem);
        navigate('/lab_items');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setLabItem({...labitem, [e.target.name]: e.target.value})
    }

    return (
        <Container injectFirst>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Item Code</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='itemCode' value={itemCode} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Item Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Description</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='description' value={description} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Item Count</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='count' value={count} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Assigned Lab</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='labno' value={labno} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editLabItemDetails()}>Edit User</Button>
            </FormControl>
        </Container>
    )
}

export default EditLabItems;