import React, { useEffect } from 'react';

function NormalLevels() {
    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
    }, []);

    const levels = {
        age: '18 - 65 years (varies by study)',
        gender: '0 = Female, 1 = Male',
        height: '150 - 190 cm (approx)',
        weight: '50 - 100 kg (depending on height)',
        ap_hi: 'Systolic: 90 - 120 mmHg',
        ap_lo: 'Diastolic: 60 - 80 mmHg',
        cholesterol: '1 = Normal, 2 = Above normal, 3 = Well above normal',
        gluc: '1 = Normal, 2 = Above normal, 3 = Well above normal',
        smoke: '0 = No, 1 = Yes',
        alco: '0 = No, 1 = Yes',
        active: '0 = No, 1 = Yes',
    };

    return (
        <div
            style={{
                minHeight: '100vh',
                padding: '40px',
                background: 'linear-gradient(to right, #dfe9f3, #ffffff)',
                color: '#2c3e50',
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <h1 style={{
                color: '#2c3e50',
                marginBottom: '30px',
                fontSize: '2.2rem',
                fontWeight: 'bold'
            }}>
                Normal Levels Reference
            </h1>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '25px',
                    width: '100%',
                    maxWidth: '1300px', // matches visual width with Home
                }}
            >
            
            
                {Object.entries(levels).map(([key, value]) => (
                    <div
                        key={key}
                        style={{
                            background: '#f8f9fa',
                            borderRadius: '12px',
                            padding: '18px',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            color: '#34495e',
                            transition: 'transform 0.3s ease',
                        }}
                    >
                        <h3 style={{
                            textTransform: 'capitalize',
                            marginBottom: '10px',
                            fontSize: '1rem',
                            fontWeight: '600'
                        }}>
                            {key.replace('_', ' ')}
                        </h3>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>{value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NormalLevels;
