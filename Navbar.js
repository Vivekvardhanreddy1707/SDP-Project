import React from 'react';

function Navbar() {
    return (
        <nav
            style={{
                background: 'linear-gradient(to right, #4a00e0, #8e2de2)',
                padding: '15px 30px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                color: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <h2 style={{ margin: 0, fontWeight: 600, fontSize: '1.6rem' }}>Health App</h2>
            <div style={{ display: 'flex', gap: '20px' }}>
                <a href="#home"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = '#ff4d6d'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>
                    Home
                </a>
                <a href="#precautions"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = '#ff4d6d'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>
                    Precautions
                </a>
                <a href="#normal-levels"
                    style={linkStyle}
                    onMouseOver={(e) => e.target.style.color = '#ff4d6d'}
                    onMouseOut={(e) => e.target.style.color = 'white'}>
                    Normal Levels
                </a>
            </div>
        </nav>
    );
}

const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s ease',
};

export default Navbar;