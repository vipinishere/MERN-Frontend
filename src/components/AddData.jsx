import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import InputForm from './InputForm';
import Alert from './Alert';


const AddData = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "https://api-mernapp-backend.onrender.com/";
    const data = new URLSearchParams(details);
    setDetails({
      name: "",
      email: "",
      age: ""
    });
    navigate("/mernapp-frontend");
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
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };
  return (
    <>
      {error ? <Alert error={error} /> : null}
      <InputForm title="Fill Information" details={details} onChange={handleChange} onSubmit={handleSubmit} />
    </>
  )
}

export default AddData
