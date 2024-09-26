import { useState } from 'react';
import { createstudent } from '../app/app';
import { useNavigate } from 'react-router-dom';

function Newstudent() {
  const [firstName, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [RegistrationNo, setRegistration] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCours] = useState('Programmation');
  const navigate = useNavigate();

  const handlSubmit = (event) => {
    event.preventDefault(); 
    const data = {firstName,lastName,RegistrationNo,email,course};
    createstudent(data).then((response) => {
      alert('Student created successfully');
      setName('');
      setLastName('');
      setRegistration('');
      setEmail('');
      setCours('');
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
                <form onSubmit={handlSubmit}>
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

export default Newstudent;
