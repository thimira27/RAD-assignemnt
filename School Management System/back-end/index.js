import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import StudentRoutes from './server/student.js';
import BookRoutes from './server/book.js';
import TeacherRoutes from './server/teacher.js';
import SubjectRoutes from './server/subject.js';
import LabItemRoutes from './server/labitem.js';


import Connection from './database/db.js';

const app = express();


dotenv.config();


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);
app.use('/student', StudentRoutes);
app.use('/book', BookRoutes);
app.use('/teacher', TeacherRoutes);
app.use('/subject', SubjectRoutes);
app.use('/labitem', LabItemRoutes);


const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = '8080';

Connection(USERNAME, PASSWORD);
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));