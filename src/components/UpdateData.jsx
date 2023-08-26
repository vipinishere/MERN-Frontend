import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Input from "./Input";
import Alert from "./Alert";

const UpdateData = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    age: ""
  });
  const { id } = useParams();
  
  const getData = async (id) => {
    const response = await fetch(`http://localhost:5000/${id}`);
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
    const url = `http://localhost:5000/${id}`;
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

  useEffect(()=>{
    getData(id);
  }, [])
  return (
    <>
      {error ? <Alert error={error} /> : null}
      <div className="d-flex align-items-center py-4 bg-body-tertiary">
        <div className="form-signin w-100 m-auto">
          <form onSubmit={handleUpdate} action="/add" method="post">
            {/* <img className="mb-4" src="https://github.com/vipinishere/Let-Connect/blob/main/lc-low-resolution-logo-black-on-transparent-background.png?raw=true" alt="" width="72" height="57" /> */}
            <h1 className="h3 mb-3 fw-normal">Edit Your Information!</h1>
            <Input type="text" name="name" value={userData.name} placeholder="Full Name" onChange={handleChange} position="top" />
            <Input type="email" name="email" value={userData.email} placeholder="Email" onChange={handleChange} position="middle" />
            <Input type="number" name="age" value={userData.age} placeholder="Age" onChange={handleChange} position="bottom" />
            <button className="btn btn-primary w-100 py-2 my-2" type="submit">Update Info</button>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2017–2023</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateData;
