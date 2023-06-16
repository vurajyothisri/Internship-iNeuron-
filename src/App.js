// import Userinput from './components/userinput';
import './App.css';
import {  Routes, Route } from 'react-router-dom';
import Userinput from './components/userinput';
import Convert from './components/Fetch';

function App() {
  return (
    <>
    

<Routes>
    <Route exact path="/" element={<Userinput />} />
    <Route path="/Fetch.js" element={<Convert />} />
   </Routes>
  
   
    
    </>
  );
}

export default App;
