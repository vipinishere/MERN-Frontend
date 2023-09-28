import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "./Alert";
import InputForm from "./InputForm";

const UpdateData = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: ""
  });
  // const { id } = useParams();

  const getData = async (id) => {
    const response = await fetch(`https://api-mernapp-backend.onrender.com/${id}`);
    const result = await response.json();
    if (!response.ok) {
      setError(result.message);
    }
    if (response.ok) {
      setUserData(result);
    }
  }



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const url = `https://api-mernapp-backend.onrender.com/${id}`;
    const data = new URLSearchParams(userData);
    setUserData({
      name: '',
      email: "",
      age: ""
    });
    try {
      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: data
      });
      const responseData = await response.json();
      if (!response.ok) {
        setError(responseData.error)
      }
      setError("Data Updated Successfully!");
      // console.log(responseData);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
    setTimeout(() => {
      setError('');
      navigate('/');
    }, 750);
  };

  useEffect(() => {
    getData(id);
  }, [])
  return (
    <>
      {error ? <Alert msg={error} /> : null}
      <InputForm title="Edit Your Information" details={userData} onChange={handleChange} onSubmit={handleUpdate} />
    </>
  );
}

export default UpdateData;
