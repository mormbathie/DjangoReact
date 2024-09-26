import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../app/app';

function State() {
    const [state, setState] = useContext(AppContext);  // Using context for global state
    
    
  return (
    <div>
        <button type="button" className="btn btn-primary position-relative">
       Nombre d'etudiants
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {state.students.length}
                  
        </span>
        </button>
    </div>
  )
}

export default State