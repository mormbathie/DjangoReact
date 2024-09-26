import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import NewProduct from './components/NewProduct';
import EditStudent from './components/EditStudent';
import { AppContext, useAppState } from './app/app';
import Students from './components/Students';

function App() {
  const appState = useAppState();  // Initialize state for the entire app

  return (
    <div className='container'>
      <AppContext.Provider value={appState}>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/Products" element={<Students/>}></Route>
            <Route path="/save" element={<NewProduct/>}></Route>
            <Route path="/student/:studentId" element={<EditStudent/>}></Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
