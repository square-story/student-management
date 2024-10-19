import { Schema, model } from 'mongoose';

export interface IStudent {
    name: string;
    age: number;
    grade: string;
    email: string;
}

const studentSchema = new Schema<IStudent>({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    grade: { type: String, required: true },
    email: { type: String, required: true }
});

export const Student = model<IStudent>('Student', studentSchema);
