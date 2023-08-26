import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Alert from "./Alert";

const InputForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: ""
    });

    const [error, setError] = useState(false);
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = "http://localhost:5000/";
        const data = new URLSearchParams(formData);
        setFormData({
            name: "",
            email: "",
            age: ""
        });
        navigate("/");
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: data
            });
            const responseData = await response.json();
            if (!response.ok) {
                setError(responseData.error)
            }
            // console.log(responseData);
        } catch (error) {
            setError(error.message);
            console.error('Error:', error);
        }
    };
    return (
        <>
            {error ? <Alert error={error} /> : null}
            <div className="d-flex align-items-center py-4 bg-body-tertiary">
                <div className="form-signin w-100 m-auto">
                    <form onSubmit={handleSubmit} action="/add" method="post">
                        {/* <img className="mb-4" src="https://github.com/vipinishere/Let-Connect/blob/main/lc-low-resolution-logo-black-on-transparent-background.png?raw=true" alt="" width="72" height="57" /> */}
                        <h1 className="h3 mb-3 fw-normal">Fill Information!</h1>
                        <Input type="text" name="name" value={formData.name} placeholder="Full Name" onChange={handleChange} position="top" />
                        <Input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} position="middle" />
                        <Input type="number" name="age" value={formData.age} placeholder="Age" onChange={handleChange} position="bottom" />
                        <button className="btn btn-primary w-100 py-2 my-2" type="submit">Add Data</button>
                        <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
                    </form>
                </div>
            </div>
        </>
    );
}

export default InputForm;