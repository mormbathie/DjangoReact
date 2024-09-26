import { useEffect, useState } from 'react';
import { createstudent, getStudentById, updatestudent } from '../app/app';
import {  useParams,useNavigate } from 'react-router-dom';


function EditStudent() {
  const {studentId} = useParams(); 
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [RegistrationNo, setRegistration] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCours] = useState('Programmation');
  const navigate = useNavigate();

 useEffect(() => {
    handleGetstudentById(studentId);
  },[]);

  const handleGetstudentById = (studentId) => {
    getStudentById(studentId).then((response) => {
      const student = response.data;
      setName(student.firstName);
      setLastName(student.lastName);
      setRegistration(student.RegistrationNo);
      setEmail(student.email);
      setCours(student.course);

  }).catch((error) => {
    console.log('Error fetching student by id:', error);
    
  })};

  const handlUpdate = (event) => {
    event.preventDefault(); 
    const data = {studentId,firstName,lastName,RegistrationNo,email,course};
    updatestudent(data).then((response) => {
      alert('Student updated successfully');
      navigate('/Products')  
     
    }).catch((error) => {
      console.error('Error creating student:', error);
    });
  
  }

  return (
    <div>
      <div className='container'>
        <div className='row p-4'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-body'>
              {studentId}
                <form onSubmit={handlUpdate}>
                  <div className='mb-3'>
                    <label className='form-label'>Name:</label>
                    <input 
                      onChange={(event)=>setName(event.target.value)} 
                      value={firstName} 
                      type='text' 
                      className='form-control' 
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Last Name:</label>
                    <input 
                      onChange={(event)=>setLastName(event.target.value)} 
                      value={lastName} 
                      type='text' 
                      className='form-control' 
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Registration Numero:</label>
                    <input 
                      onChange={(event)=>setRegistration(event.target.value)} 
                      value={RegistrationNo} 
                      type='text' 
                      className='form-control' 
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Email:</label>
                    <input 
                      onChange={(event)=>setEmail(event.target.value)} 
                      value={email} 
                      type='text' 
                      className='form-control' 
                    />
                  </div>
                  <div className='mb-3'>
                    <label className='form-label'>Cours:</label>
                    <input 
                      onChange={(event)=>setCours(event.target.value)} 
                      value={course} 
                      type='text' 
                      className='form-control' 
                    />
                  </div>
                  <button className='btn btn-success'>Save</button>
                </form>
              </div>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditStudent
