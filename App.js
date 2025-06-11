import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Precautions from './Components/Precautions';
import NormalLevels from './Components/normallevels';
import './App.css';

function App() {
    return (
        <div>
            <Navbar />

            <section id="home" style={{ paddingTop: '60px' }}>
                <Home />
            </section>

            <section id="precautions" style={{ margin: 0, padding: 0 }}>
                <Precautions />
            </section>

            <section id="normal-levels" style={{ margin: 0, padding: 0 }}>
                <NormalLevels />
            </section>
        </div>
    );
}

export default App;
