import { Student, IStudent } from '../models/studentModel';


export class StudentService {
    async getStudents(): Promise<IStudent[]> {
        try {
            return await Student.find();
        } catch (error) {
            throw new Error('Error fetching students from database');
        }
    }
    async addStudent(student: IStudent): Promise<IStudent> {
        try {
            const newStudent = new Student(student);
            return await newStudent.save();
        } catch (error) {
            throw new Error('Error adding student');
        }
    }
    async updateStudent(id: string, studentData: Partial<IStudent>): Promise<IStudent | null> {
        try {
            return await Student.findByIdAndUpdate(id, studentData, { new: true });
        } catch (error) {
            throw new Error('Error updating student')
        }
    }
    async deleteStudent(id: string): Promise<IStudent | null> {
        try {
            return await Student.findByIdAndDelete(id);
        } catch (error) {
            throw new Error('Error deleting student');
        }
    }
}

