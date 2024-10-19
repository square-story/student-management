import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import studentRoutes from './routes/studentRoutes';
import path from 'path'

const app = express();

mongoose.connect('mongodb://localhost:27017/studentdb')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', studentRoutes);

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});