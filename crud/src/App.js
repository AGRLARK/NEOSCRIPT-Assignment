import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Edit from './Edit.jsx';
import AddStudent from './AddStudent.jsx';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      axios.delete(`http://localhost:5000/students/${id}`)
        .then(res => {
          const updatedStudents = students.filter(student => student.id !== id);
          setStudents(updatedStudents);
          alert('Record deleted successfully.');
        })
        .catch(err => {
          console.error('Error deleting record:', err);
        });
    }
  };

  return (
    <>
      <MDBNavbar light bgColor='blue ' className='bg-blue-500 '>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-white'><span>NEOSCRIPT  </span>&nbsp;  CRUD</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <Router>
        <div className="container mx-auto my-4" style={{ margin: '0', padding: '0' }}>
          <h1 className="text-3xl font-bold my-4">Student Data</h1>
          <AddStudent />
          <br /><br />
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Standard</th>
                <th>Academic Year</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Deleted At</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.standard}</td>
                  <td>{student.academicYear}</td>
                  <td>{student.createdAt}</td>
                  <td>{student.updatedAt}</td>
                  <td>{student.deleteAt}</td>
                  <td>
                    <Link to={`/edit/${student.id}`} className="btn btn-primary me-2" style={{ cursor: 'pointer' }}>
                      Edit
                    </Link>
                    <button className="btn btn-danger" onClick={() => handleDelete(student.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Routes>
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
