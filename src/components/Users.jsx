import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=2`)
      .then((res) => {
        setUsers(res.data);
      });
  }, [page]);
  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Phone number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Company</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.email}</td>
                <td>{item.address.street}</td>
                <td>{item.website}</td>
                <td>{item.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="row mt-4 text-center">
          <div>
            <button className="btn btn-secondary mx-1" onClick={prevPage}>
              prev
            </button>
            <span>{page}</span>
            <button className="btn btn-secondary mx-1" onClick={nextPage}>
              next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
