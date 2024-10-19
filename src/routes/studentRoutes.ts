import { Router } from "express";

import { addStudent, deleteStudent, getStudents, updateStudent, getEditForm } from '../controllers/studentController'

const router = Router();

router.get('/', getStudents)
router.post('/add', addStudent)
router.post('/update/:id', updateStudent)
router.post('/delete/:id', deleteStudent)
router.get('/edit/:id', getEditForm);
export default router;