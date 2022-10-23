import express from 'express';
import { getUsers, addUser, getUserById, editUser, deleteUser } from '../controller/people-controller.js';
//import { addStudent, deleteStudent, getStudents,e} from '../controller/student-controller.js';
import { addBook} from '../controller/book-controller.js';
import { loginUser, singupUser, logoutUser } from '../controller/user-controller.js';
import { authenticateToken, createNewToken } from '../controller/jwt-controller.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

//router.get('/', getUsers);
// router.post('/add', addUser);
// //router.get('/user:id', getUserById);
// router.put('/:id', editUser);
// router.delete('/:id', deleteUser);


//router.get('/', getStudents);

//router.get('/', getUsers);
// router.get('/student', getStudents);
// router.post('/addStudent', addStudent);
// router.delete('/:id', deleteStudent);


router.post('/addBook', addBook);

export default router;