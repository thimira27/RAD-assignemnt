import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addLabItem } from '../../service/api';
import { useNavigate } from 'react-router-dom';

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
        margin-top: 20px;
`;

const AddLabItem = () => {
    const [labitem, setLabItem] = useState(initialValue);
    const { itemCode, name, description, count, labno} = labitem;
    
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setLabItem({...labitem, [e.target.name]: e.target.value})
    }

    const addLabItemDetails = async() => {
        await addLabItem(labitem);
        navigate('/lab_items');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
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
                <Button variant="contained" color="primary" onClick={() => addLabItemDetails()}>Add Lab Item</Button>
            </FormControl>
        </Container>
    )
}

export default AddLabItem;