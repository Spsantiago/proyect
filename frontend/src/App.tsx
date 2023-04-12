import React from 'react';
import './App.css';
import { BrowserRouter as Browser } from 'react-router-dom';
import {Suspense} from 'react'
import { Ruteo } from './app/utils/routes/Ruteo';
    


const Loading =(
    <div className="spinner-grow text-center" style={{width: "3rem" ,height: "3rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div>
)

function App() {
    return (
       
            <Browser>
            <Suspense fallback={Loading}>
                <Ruteo/>  
            </Suspense>
            </Browser>
      
    );
}

export default App;
