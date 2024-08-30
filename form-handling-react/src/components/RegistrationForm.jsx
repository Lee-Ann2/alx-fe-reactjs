import { useState } from "react";

const ControlledForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', password: ''});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="name"
            value={username}
            onChange={handleChange}
            />
            <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            />
            <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledForm;