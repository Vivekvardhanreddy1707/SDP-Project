import React, { useState, useEffect } from 'react';

function Home() {
    const [formData, setFormData] = useState({
        id: '',
        age: '',
        gender: '',
        height: '',
        weight: '',
        ap_hi: '',
        ap_lo: '',
        cholesterol: '',
        gluc: '',
        smoke: '',
        alco: '',
        active: ''
    });

    const [riskMessage, setRiskMessage] = useState('');

    useEffect(() => {
        document.body.style.margin = '0';
        document.body.style.padding = '0';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { age, ap_hi, ap_lo, cholesterol, gluc, smoke, alco, active, weight, height } = formData;
        let riskFactors = [];

        if (Number(age) > 50) riskFactors.push('Age over 50');
        if (Number(ap_hi) > 140 || Number(ap_lo) > 90) riskFactors.push('High blood pressure');
        if (Number(cholesterol) > 1) riskFactors.push('Elevated cholesterol');
        if (Number(gluc) > 1) riskFactors.push('Elevated glucose');
        if (smoke === '1') riskFactors.push('Smoker');
        if (alco === '1') riskFactors.push('Alcohol consumption');
        if (active === '0') riskFactors.push('Physically inactive');

        const bmi = Number(weight) / ((Number(height) / 100) ** 2);
        if (bmi > 25) riskFactors.push(`Overweight (BMI: ${bmi.toFixed(1)})`);

        if (riskFactors.length > 0) {
            setRiskMessage(`⚠️ Risk Detected: ${riskFactors.join(', ')}`);
        } else {
            setRiskMessage('✅ No immediate risk detected. Keep maintaining your health!');
        }

        console.log('Submitted Data:', formData);
    };

    const keys = Object.keys(formData);
    const mid = Math.ceil(keys.length / 2);
    const column1 = keys.slice(0, mid);
    const column2 = keys.slice(mid);

    const fieldLabels = {
        id: 'Patient Name',
        age: 'Age (in years)',
        gender: 'Gender',
        height: 'Height (in cm)',
        weight: 'Weight (in kg)',
        ap_hi: 'Systolic BP',
        ap_lo: 'Diastolic BP',
        cholesterol: 'Cholesterol (0–2)',
        gluc: 'Glucose (0–2)',
        smoke: 'Do you smoke?',
        alco: 'Consume alcohol?',
        active: 'Physically active?'
    };

    const binaryFields = {
        gender: true,
        smoke: true,
        alco: true,
        active: true
    };

    const inputStyle = {
        width: '100%',
        padding: '8px 10px',
        fontSize: '14px',
        borderRadius: '6px',
        border: '1px solid #ccc',
        boxSizing: 'border-box'
    };

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding: '40px',
            background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
            gap: '30px'
        }}>
            {/* Left Column */}
            <div style={{ flex: 1, minWidth: '300px' }}>
                <h2 style={{ color: '#2c3e50' }}>History of Heart Disease</h2>
                <p><strong>• Ancient Times:</strong> Ancient Egyptians documented symptoms of heart disease. Mummies show signs of atherosclerosis.</p>
                <p><strong>• Middle Ages:</strong> Limited scientific progress. Disease was misunderstood as emotional/spiritual.</p>
                <p><strong>• 18th–19th Century:</strong> Scientific breakthroughs. William Harvey described blood circulation (1628).</p>
                <p><strong>• 20th Century Onward:</strong> Framingham Heart Study identified risk factors. ECG and angiography introduced.</p>
                <p><strong>• Prediction Tools:</strong> Framingham Risk Score predicts 10-year risk based on age, cholesterol, BP, smoking.</p>
                <p><strong>• Medicines:</strong> Digitalis, Nitroglycerin, Aspirin, beta-blockers, ACE inhibitors, statins.</p>
            </div>

            {/* Right Column - Form */}
            <div style={{
                flex: 1,
                minWidth: '340px',
                background: '#fff',
                padding: '30px',
                borderRadius: '12px',
                boxShadow: '0 0 12px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#34495e' }}>Health Risk Predictor</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        {[column1, column2].map((col, idx) => (
                            <div key={idx} style={{ flex: 1 }}>
                                {col.map(key => (
                                    <div key={key} style={{ marginBottom: '15px' }}>
                                        <label style={{
                                            display: 'block',
                                            marginBottom: '6px',
                                            fontSize: '0.85rem',
                                            color: '#2c3e50'
                                        }}>
                                            {fieldLabels[key] || key}
                                        </label>
                                        {key === 'gender' ? (
                                            <select
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                style={inputStyle}
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option value="1">Male</option>
                                                <option value="0">Female</option>
                                            </select>
                                        ) : binaryFields[key] ? (
                                            <select
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                style={inputStyle}
                                                required
                                            >
                                                <option value="">Select</option>
                                                <option value="1">Yes</option>
                                                <option value="0">No</option>
                                            </select>
                                        ) : (
                                            <input
                                                type={key === 'id' ? 'text' : 'number'}
                                                name={key}
                                                value={formData[key]}
                                                onChange={handleChange}
                                                style={inputStyle}
                                                required
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <button type="submit" style={{
                        width: '100%',
                        padding: '12px',
                        backgroundColor: '#6c5ce7',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px',
                        fontSize: '16px',
                        marginTop: '20px',
                        cursor: 'pointer'
                    }}>
                        Submit
                    </button>

                    {riskMessage && (
                        <div style={{
                            marginTop: '20px',
                            padding: '10px 15px',
                            backgroundColor: '#ffeaa7',
                            borderRadius: '6px',
                            color: '#2d3436',
                            fontWeight: 'bold'
                        }}>
                            {riskMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default Home;
