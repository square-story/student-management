# Student Management System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Introduction

The **Student Management System** is a web application that allows users to manage student information effectively. This includes adding, updating, deleting, and viewing student details. The system uses a MongoDB database to store student data and provides an intuitive interface for easy management.

## Features

- **Add Student**: Input student details and save them to the database.
- **Update Student**: Modify existing student details.
- **Delete Student**: Remove student records from the system.
- **View All Students**: List all students with their details.

## Technologies Used

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **TypeScript**: For type safety and better development experience
- **Asynchronous Operations**: Fetch API calls for data handling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/square-story/student-management.git
   cd student-management-system
Install the required dependencies:
``` bash
npm install
```
Set up your MongoDB database and update the connection string in your ``.env`` file.

Start the development server:

```bash
npm run dev
```
Open your browser and go to ``http://localhost:3000`` to access the application.

Usage

    Navigate to the home page to view the list of students.
    Use the form to add new student details.
    Click on the "Edit" button next to a student to update their information.
    Click on the "Delete" button to remove a student from the list.

API Endpoints

    GET /students: Fetch all students.
    POST /add: Add a new student.
    POST /delete/
    : Delete a student by ID.
    GET /edit/
    : Get student details for editing.
    POST /update/
    : Update a student's details.
