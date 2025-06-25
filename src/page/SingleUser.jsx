import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, []);
  return (
    <div>
      <h1>SingleUser</h1>
      <p>{user?.name}</p>
    </div>
  );
};

export default SingleUser;
