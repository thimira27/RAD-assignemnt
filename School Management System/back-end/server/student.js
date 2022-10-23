import express from 'express';
import { addStudent, deleteStudent, getStudents,editStudent,getStudentById} from '../controller/student-controller.js';
import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

const router = express.Router();

//router.get('/', getStudents);
router.get('/all', getStudents);
router.post('/addStudent', addStudent);
router.delete('/:id', deleteStudent);
router.put('/:id', editStudent);
router.get('/all/:id', getStudentById);

export default router;