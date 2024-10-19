import { Router } from "express";

import { addStudent, deleteStudent, getStudents, updateStudent } from '../controllers/studentController'

const router = Router();

router.get('/', getStudents)
router.post('/add', addStudent)
router.post('/update/:id', updateStudent)
router.post('/delete/:id', deleteStudent)

export default router;