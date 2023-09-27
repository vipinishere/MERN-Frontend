import React, { useEffect, useState } from 'react'
import Card from './Card';
import Alert from './Alert';

const AllData = () => {
  const [data, setData] = useState();
  const [error, setError] = useState('');

  async function getData() {
    const response = await fetch('https://api-mernapp-backend.onrender.com/');
    const result = await response.json();

    if (!response.ok) {
      console.log(error);
      setError(result.error);
    }
    if (response.ok) {
      setData(result);
    }
  }
  const handleDelete = async (id) => {
    const response = await fetch(`https://api-mernapp-backend.onrender.com/${id}`, {
      method: "DELETE"
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.message)
    }
    if (response.ok) {
      setError("User deleted successfully!");
      getData();
    }
    setTimeout(() => {
      setError(false)
    }, 1000);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='container my-2'>
      {error ? <Alert error={error} /> : null}
      <h2 className="text-center">All Data</h2>
      <div className="row">
        {
          data?.map((ele) => {
            return (
              <Card key={ele._id} id={ele._id} name={ele.name} email={ele.email} age={ele.age} deleteData={handleDelete} />
            )
          })
        }
      </div>
    </div>
  )
}

export default AllData;