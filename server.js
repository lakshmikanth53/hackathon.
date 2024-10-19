const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
let courses = [
    "Operating System",
    "Data Structures & Algorithms",
    "Database Management Science",
    "Theory Of Computation",
    "Computer Networks",
    "Computer Organisation & Architecture",
    "C++ Programming",
    "Web Development",
    "Digital Logic Design"
];

let teachers = [
    { name: "Dr Krishna", rating: "4.8/5", projects: "Project A, Project B, Project C", patents: "Patent 1, Patent 2", background: "PhD in Computer Science" },
    { name: "Dr Arjuna", rating: "4.5/5", projects: "Project B, Project C", patents: "Patent 4, Patent 2", background: "PhD in Data Science" },
    { name: "Dr Karna", rating: "4.3/5", projects: "Project D, Project E", patents: "Patent 3, Patent 1", background: "PhD in Software Engineering" },
    { name: "Dr Aswathama", rating: "4.5/5", projects: "Project E, Project G", patents: "Patent 1, Patent 4", background: "PhD in Networking" }
];

// Endpoints
app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.get('/api/teachers', (req, res) => {
    res.json(teachers);
});

app.post('/api/selection', (req, res) => {
    const { selectedCourses, selectedTeachers } = req.body;
    // Here you can process the selection data, e.g., save to a database
    console.log('Course Selection:', selectedCourses);
    console.log('Selected Teachers:', selectedTeachers);
    res.status(200).json({ message: 'Selection submitted successfully' });
});

app.post('/api/feedback', (req, res) => {
    const { teacher, rating, comments } = req.body;
    // Here you can process the feedback, e.g., save to a database
    console.log('Feedback:', { teacher, rating, comments });
    res.status(200).json({ message: 'Feedback submitted successfully' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
