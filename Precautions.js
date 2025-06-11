import React, { useState } from 'react';

function Precautions() {
    const precautions = [
        {
            title: 'Diet and Nutrition',
            description:
                '• Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins. • Limit processed foods, sugar, and saturated fats. • Stay hydrated - drink enough water throughout the day.',
        },
        {
            title: 'Exercise and Physical Activity',
            description:
                '• Aim for at least 30 minutes of moderate exercise daily (e.g., walking, cycling, yoga). • Include strength training exercises at least twice a week.',
        },
        {
            title: 'Hygiene and Cleanliness',
            description:
                '• Wash hands regularly with soap and water. • Maintain personal hygiene (daily shower, clean clothes). • Keep your surroundings clean to prevent infections.',
        },
        {
            title: 'Sleep and Rest',
            description:
                '• Get 7-9 hours of quality sleep per night. • Avoid screen time at least 30 minutes before bed.',
        },
        {
            title: 'Mental Health',
            description:
                '• Practice stress management techniques (meditation, deep breathing, journaling). • Stay connected with friends and loved ones. • Don’t hesitate to seek professional help if needed.',
        },
        {
            title: 'Regular Checkups',
            description:
                '• Visit your doctor for regular health screenings. • Stay updated on vaccinations and dental care.',
        },
        {
            title: 'Avoid Harmful Habits',
            description:
                '• Do not smoke or use tobacco products. • Limit alcohol consumption. • Avoid recreational drug use.',
        },
        {
            title: 'Environmental Safety',
            description:
                '• Use safety gear (helmets, seat belts). • Be cautious around chemicals and pollutants. • Protect yourself from excessive sun exposure.',
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
            style={{
                padding: '30px',
                background: 'linear-gradient(to right, #eef2f3, #ffffff)',
                minHeight: '100vh',
                boxSizing: 'border-box',
            }}
        >
            <h1
                style={{
                    textAlign: 'center',
                    color: '#2c3e50',
                    fontSize: '2.2rem',
                    marginBottom: '30px',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
                }}
            >
                Health Precautions
            </h1>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                    gap: '25px',
                }}
            >
                {precautions.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                background: '#f7f9fb',
                                padding: '20px',
                                borderRadius: '15px',
                                cursor: 'pointer',
                                height: '250px',
                                position: 'relative',
                                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                                color: isHovered ? '#2c3e50' : '#34495e',
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                            }}
                        >
                            <div
                                style={{
                                    fontWeight: '600',
                                    fontSize: '1.15rem',
                                    marginBottom: '10px',
                                    color: isHovered ? '#5e60ce' : '#2c3e50',
                                    transition: 'color 0.4s ease',
                                }}
                            >
                                {item.title}
                            </div>

                            <div
                                style={{
                                    color: isHovered ? '#2c3e50' : '#6c757d',
                                    transition: 'color 0.4s ease',
                                    fontSize: '0.92rem',
                                }}
                            >
                                <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                    {item.description
                                        .split('•')
                                        .filter(line => line.trim() !== '')
                                        .map((point, idx) => (
                                            <li key={idx} style={{ marginBottom: '6px' }}>
                                                {point.trim()}
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Precautions;
