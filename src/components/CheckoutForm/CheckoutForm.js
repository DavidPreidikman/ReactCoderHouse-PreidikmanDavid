import React, { useState } from 'react';
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleConfirm = (event) => {
        event.preventDefault();

        if (name && phone && email) {
            const userData = {
                name, phone, email,
            };

            onConfirm(userData);
        } else {
            alert('Please fill out all required fields.');
        }
    }
    
    return (
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    name
                    <input
                        className="Input"
                        type="text"
                        value={name}
                        onChange={({ target }) => setName(target.value)}
                        required
                    />
                </label>
                <label className="Label">
                    phone
                    <input
                        className="Input"
                        type="tel"
                        value={phone}
                        onChange={({ target }) => {
                            const value = target.value;
                            if (!isNaN(value)) {
                                setPhone(value);
                            }
                        }}
                        required
                    />
                </label>
                <label className="Label">
                    e-mail
                    <input
                        className="Input"
                        type="email"
                        value={email}
                        onChange={({ target }) => setEmail(target.value)}
                        required
                    />
                </label>
                <div className="Label">
                    <button type="submit" className="Button">
                        PLACE ORDER
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CheckoutForm;
