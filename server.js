const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'colleges',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});


// Handle POST request to add a new student
app.post('/students', (req, res) => {
  const { name, rollNo, standard, academicYear } = req.body;
  const sql = 'INSERT INTO students (name, rollNo, standard, academicYear) VALUES (?, ?, ?, ?)';

  db.query(sql, [name, rollNo, standard, academicYear], (err, result) => {
    if (err) throw err;
    console.log('Student added successfully.');
    res.send('Student added successfully.');
  });
});


// Handle PUT request to update a student record
app.put('/students/:id', (req, res) => {
  const id = req.params.id;
  const { name, rollNo, standard, academicYear, createdAt, updatedAt, deleteAt } = req.body;
  let sql = 'UPDATE students SET name = ?, rollNo = ?, standard = ?, academicYear = ?, createdAt = ?, updatedAt = ?, deleteAt = ? WHERE id = ?';

  db.query(sql, [name, rollNo, standard, academicYear, createdAt, updatedAt, deleteAt, id], (err, result) => {
    if (err) {
      console.error('Error updating student:', err);
      res.status(500).send('Error updating student');
    } else {
      console.log(`Updated student with ID: ${id}`);
      res.send(`Updated student with ID: ${id}`);
    }
  });
});


// Handle GET request to fetch a specific student record for editing
app.get('/students/:id', (req, res) => {
  const id = req.params.id;
  const query = 'SELECT * FROM students WHERE id = ?';
  db.query(query, id, (err, result) => {
    if (err) throw err;
    res.json(result[0]);
  });
});

// Handle DELETE request to delete a student record
app.delete('/students/:id', (req, res) => {
  const id = req.params.id;
  const sql = 'DELETE FROM students WHERE id = ?';

  db.query(sql, id, (err, result) => {
    if (err) throw err;
    console.log(`Deleted student with ID: ${id}`);
    res.send(`Deleted student with ID: ${id}`);
  });
});

// Define the /students route to handle the GET request
app.get('/students', (req, res) => {
  const query = 'SELECT id, name, rollNo, standard, academicYear, createdAt, updatedAt, deleteAt FROM students';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
