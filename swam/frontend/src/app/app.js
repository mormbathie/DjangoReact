import axios from 'axios';
import { createContext, useState } from 'react';

export const studentApis = axios.create({
    baseURL: 'http://localhost:8000/api/',   
});

export const getStudents = () => {
    return studentApis.get('student/');
};

export const getStudentById = (studentId) => {
    return studentApis.get(`student/${studentId}`);
};

export const deleteStudent = (student) => {
    return studentApis.delete(`student/${student.studentId}/`);
};

export const createstudent = (student) => {
    return studentApis.post('student/', student);
};

export const updatestudent = (student) => {
    return studentApis.put(`student/${student.studentId}/`, student);
};

// Context API to provide global state
export const AppContext = createContext();

export const useAppState = () => {
    const initialState = {
        students: [],
    };
    const [state, setState] = useState(initialState);

    return [state, setState];
};
