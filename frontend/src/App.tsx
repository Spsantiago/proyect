import './App.css';
import { Header } from './app/components/Header';
import { BrowserRouter as Rut } from 'react-router-dom';
import { Rout } from './app/utils/routes/Rout';

function App() {
    return (
        <div className="container-fluid">
                <Rut>
                    <Header />
                    <Rout/>
                </Rut>
        </div>
    );
}

export default App;
