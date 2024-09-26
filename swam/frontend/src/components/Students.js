import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { getStudents, deleteStudent } from '../app/app';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../app/app';


function Students() {
  const navigate = useNavigate();
  const [state, setState] = useContext(AppContext);  // Using context for global state

  useEffect(() => {
    handlGetstudents();
  }, []);

  const handlGetstudents = () => {
    getStudents().then((response) => {
      setState((prevState) => ({
        ...prevState,
        students: response.data,
      }));
    });
  };

  const handleClickDelete = (student) => {
    deleteStudent(student).then(() => {
      const newstudents = state.students.filter(p => p.studentId !== student.studentId);
      setState((prevState) => ({
        ...prevState,
        students: newstudents,
      }));
    });
  };

  return (
    <div className='container'>
      
      <div className='row'>
        <div className='p-2 m-1'>
          <div className='card'>
            <div className='card-body'>
              <table className='table'>
                <thead className='table-danger'>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Registration</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
              
                <tbody>
                  {state.students.map(student => (
                    <tr key={student.studentId}>
                      <td>{student.studentId}</td>
                      <td>{student.firstName}</td>
                      <td>{student.lastName}</td>
                      <td>{student.RegistrationNo}</td>
                      <td>{student.course}</td>
                      <td>{student.email}</td>
                      <td>
                        <button onClick={() => navigate(`/student/${student.studentId}`)} className='btn btn-primary'><FontAwesomeIcon icon={faEdit} /></button>
                        <button onClick={() => handleClickDelete(student)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashAlt} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
