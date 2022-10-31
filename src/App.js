
import './App.css';
import NavbarComp from './components/NavbarComp.js';
import {Routes,Route} from 'react-router-dom'
import All from './components/All'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Shakes from './components/Shakes'
import Main from './components/Main'
import menu from './data/data'
import { useState } from 'react';

function App() {
  const[data, setData]= useState(menu)

  
  

  return (
    <main className='container'>
      <div className="title-section">
        <h2 className='title'>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <NavbarComp/>
      
      <Routes>
      
        <Route path='/' element={<Main/>}/>
        <Route path='/all' element={<All data={data}/>}/>
        <Route path='/breakfast' element={<Breakfast data={data}/>}/>
        <Route path='/lunch' element={<Lunch data={data}/>}/>
        <Route path='/shakes' element={<Shakes data={data}/>}/>
        
      </Routes>

      
      

      

     
    </main>
  );
}

export default App;
