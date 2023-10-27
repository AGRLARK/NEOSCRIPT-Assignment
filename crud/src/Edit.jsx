import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const Edit = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({
    id: '',
    name: '',
    rollNo: '',
    standard: '',
    academicYear: '',
    createdAt: '',
    updatedAt: '',
    deleteAt: ''
  });
  const [isFormOpen, setIsFormOpen] = useState(true);

  const toggleModal = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/students/${id}`)
        .then(response => {
          setStudent(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }
  }, [id]);

  const handleChange = (e, field) => {
    const value = e.target.value;
    setStudent(prevStudent => ({
      ...prevStudent,
      [field]: value
    }));
  };

  const handleCancel = () => {
    toggleModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:5000/students/${id}`, student)
        .then(response => {
          console.log(response.data);
          alert('Student data updated successfully');
          window.location.href = 'http://localhost:3000'; // Redirect to the home page
        })
        .catch(error => {
          console.error('Error updating data:', error);
        });
    }
  };

  return (
    <div>
      {isFormOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
          <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
            <div className="modal-content py-4 text-left px-6">
              <h1 className="text-2xl font-bold mb-4">Edit Student Data</h1>
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
                  <input className="input-field" type="text" name="id" value={student.id} onChange={(e) => handleChange(e, 'id')} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                  <input className="input-field" type="text" name="name" value={student.name} onChange={(e) => handleChange(e, 'name')} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Roll No:</label>
                  <input className="input-field" type="text" name="rollNo" value={student.rollNo} onChange={(e) => handleChange(e, 'rollNo')} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Standard:</label>
                  <input className="input-field" type="text" name="standard" value={student.standard} onChange={(e) => handleChange(e, 'standard')} />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">Academic Year:</label>
                  <input className="input-field" type="text" name="academicYear" value={student.academicYear} onChange={(e) => handleChange(e, 'academicYear')} />
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Update
                </button>
              </form>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4" onClick={handleCancel}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Edit;
