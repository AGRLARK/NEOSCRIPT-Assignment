import React, { useState } from 'react';
import axios from 'axios';


const AddStudent = () => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [standard, setStandard] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const toggleModal = () => {
    setIsFormOpen(!isFormOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { name, rollNo, standard, academicYear };

    axios.post('http://localhost:5000/students', newStudent)
      .then(res => {
        console.log(res.data);
        alert('Student data added successfully!');
      })
      .catch(err => {
        console.error('Error adding student:', err);
      });
  };

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal" style={{ background: '#5f58fd', color: 'white', marginRight: '20px' }}>
        Add Student Data
      </button>

      {isFormOpen && (
        <div className="modal ">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h1 style={{color: 'black', fontSize: '20px', fontWeight: 'bold'}}>Add Student Data</h1><br/><br/>
            <form onSubmit={handleSubmit} className="w-1/2 mx-auto ">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNo">
                  Roll No:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="rollNo"
                  type="text"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="standard">
                  Standard:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="standard"
                  type="text"
                  value={standard}
                  onChange={(e) => setStandard(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="academicYear">
                  Academic Year:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="academicYear"
                  type="text"
                  value={academicYear}
                  onChange={(e) => setAcademicYear(e.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Add Student
                </button>
              </div>
            </form>
            <button className="close-modal" onClick={toggleModal} style={{ border: '1px solid black', borderRadius: '1px',color:'black',fontWeight:'bold' }}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddStudent;