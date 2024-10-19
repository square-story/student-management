import { Request, Response } from "express";
import { StudentService } from "../services/studentService";

const studentService = new StudentService();

export async function getStudents(req: Request, res: Response) {
    try {
        const students = await studentService.getStudents();
        res.render('students', { students });
    } catch (error) {
        res.status(500).json('Error fetching students');
    }
}

export async function addStudent(req: Request, res: Response): Promise<void> {
    try {
        const { name, age, grade, email } = req.body;
        await studentService.addStudent({ name, age, grade, email });
        res.redirect('/')
    } catch (error) {
        res.status(500).json('Error adding student');
    }
}

export async function updateStudent(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const { name, age, grade, email } = req.body;
        await studentService.updateStudent(id, { name, age, grade, email })
        res.redirect('/')
    } catch (error) {
        res.status(500).send('Error updating student');
    }
}

export async function deleteStudent(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params
        await studentService.deleteStudent(id)
        res.redirect('/')
    } catch (error) {
        res.status(500).send('Error deleting student');
    }
}

export async function getEditForm(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const student = await studentService.getStudentById(id);
        res.render('editStudent', { student });
    } catch (error) {

    }
}