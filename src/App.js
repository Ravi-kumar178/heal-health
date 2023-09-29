import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Full from './components/Full';
import Navbar from './components/Navbar';
import { Previous } from './components/Previous';
import Terms from './components/Terms';




/* console.log(Full); */
function App() {
  return (
    <div className="App overflow-x-hidden">
       <Router>
           
            
           <Routes>
              <Route path='/' element={<Full/>}/>
              <Route path='/previous-convention' element={<Previous/>}/>
               <Route path='/Terms-Conditions' element={<Terms/>}/>
           </Routes>


       </Router>

    </div>
  );
}

export default App;
