import express from 'express';
import { getSubject, deleteSubject, addSubject, editSubject, getSubjectById } from '../controller/subject-controller.js';

const router = express.Router();

//router.get('/', getSubject);
router.get('/subject', getSubject);
router.post('/addSubject', addSubject);
router.delete('/:id', deleteSubject);
router.put('/:id', editSubject);
router.get('/subject/:id', getSubjectById);

export default router;