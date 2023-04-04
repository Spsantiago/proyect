import React from 'react';
import './App.css';
import { BrowserRouter as Browser } from 'react-router-dom';
import { Principal } from './app/views/public/Principal';

function App() {
    return (
        <div className="App">
            <Browser>
                <Principal />
        
            </Browser>
        </div>
    );
}

export default App;
