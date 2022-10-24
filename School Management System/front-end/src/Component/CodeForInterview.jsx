
import { Box, Typography, styled, Button } from '@mui/material';

import Student from '../Assets/Images/student.png';
import Teacher from '../Assets/Images/teacher.png';
import Book from '../Assets/Images/book.png';
import Subject from '../Assets/Images/subject.png';
import Lab from '../Assets/Images/lab.png';

import { Link } from 'react-router-dom';

import InstaTele from '../Assets/Images/InstaTele.jpeg';
import { red } from '@mui/material/colors';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '%100',
    height: '100%'
});

const BoxContent = styled('div')({
   
    height: '100%',
    width: '220px',
    marginLeft: '20px',
    display: 'flex', 
    justifyContent: 'center',
   
})

const CodeForInterview = () => {
    return (
        <Header>
            {/* <Typography variant="h4">Code for Interview</Typography> */}
            <Box style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <BoxContent>
                    <Image  src={Student} style={{width: '65.5%', marginLeft: '5px'}} />
                    <Button color="primary" variant="contained" component={Link} to={`/students`} >Student</Button>
                </BoxContent>
                <BoxContent>
                    <Image src={Teacher} style={{width: '65.5%', marginLeft: '5px'}} />
                    <Button color="primary" variant="contained" component={Link} to={`/teachers`} >Teacher</Button>
                </BoxContent>
                
                <BoxContent>
                    <Image src={Lab} style={{width: '65.5%', marginLeft: '5px'}} />
                    <Button color="primary" variant="contained" component={Link} to={`/lab_items`} >Lab</Button>
                </BoxContent>
                <BoxContent>
                    <Image src={Book} style={{width: '65.5%', marginLeft: '5px'}} />
                    <Button color="primary" variant="contained" component={Link} to={`/books`} >Book</Button>
                </BoxContent>
                <BoxContent>
                    <Image src={Subject} style={{width: '65.5%', marginLeft: '5px'}} />
                    <Button color="primary" variant="contained" component={Link} to={`/subjects`} >Subject</Button>
                </BoxContent>
                {/* <Image src={InstaTele} /> */}
            </Box>
        </Header>
    )
}

export default CodeForInterview;