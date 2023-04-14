import React from 'react';
import "./assets/css/main.css";
import "./assets/css/variables-blue.css";
import "./assets/css/variables-green.css";
import "./assets/css/variables-orange.css";
import "./assets/css/variables-pink.css";
import "./assets/css/variables-purple.css";
import "./assets/css/variables-red.css";
import "./assets/css/variables.css";
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
