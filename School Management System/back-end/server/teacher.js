import express from 'express';
import { addTeacher, deleteTeacher, getTeachers,editTeacher,getTeacherById} from '../controller/teacher-controller.js';

const router = express.Router();

router.get('/teacher', getTeachers);
router.post('/addTeacher', addTeacher);
router.delete('/:id', deleteTeacher);
router.put('/:id', editTeacher);
router.get('/teacher/:id', getTeacherById);

export default router;