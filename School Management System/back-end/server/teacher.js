import express from 'express';
import { addTeacher, deleteTeacher, getTeachers,editTeacher,getTeacherById} from '../controller/teacher-controller.js';

const router = express.Router();

router.get('/teachers', getTeachers);
router.post('/addTeacher', addTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', editTeacher);
router.get('/teachers/:id', getTeacherById);

export default router;