import React, { useEffect, useState } from "react";
import { Users } from "../../services/Students";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({});
  const [editingId, setEditingId] = useState(null);
  useEffect(() => {
    async function getAllStudents() {
      const res = await Users.getAll();
      setStudents(res);
    }
    getAllStudents();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await Users.createUser(form);
    if (res.status === 201) {
      const res = await Users.getAll();
      setStudents(res);
    }
    if (editingId) {
      const res = await Users.update(editingId, form);
      if (res.status === 200) {
        setEditingId(null);
        setForm({});
        setStudents(await Users.getAll());
      }
    } else {
      const res = await Users.createUser(form);
      if (res.status === 201) {
        setStudents(await Users.getAll());
        setForm({});
      }
    }
  };
  const deleteItem = async (id) => {
    const res = await Users.delete(id);
    if (res.status == 200) {
      const res = await Users.getAll();
      setStudents(res);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div>
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit} id="student">
                  <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    placeholder="first name"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    placeholder="last name"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    name="email"
                    onChange={handleChange}
                    placeholder="email"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    name="jshshr"
                    onChange={handleChange}
                    placeholder="jshshr"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    name="dob"
                    onChange={handleChange}
                    placeholder="date of birth"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    name="adress"
                    onChange={handleChange}
                    placeholder="Address"
                    className="form-control my-2"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-success"
                  form="student"
                  type="submit"
                >
                  Save
                </button>
                {editingId && (
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => {
                      setEditingId(null);
                      setForm({});
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>Fist name</th>
                  <th>last name</th>
                  <th>JSHSHR</th>
                  <th>Email</th>
                  <th>Date of birth</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((item) => (
                  <tr key={item.id} onClick={() => moveSingleUser(item.id)}>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.jshshr}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{item.address}</td>
                    <td className="d-flex gap-1">
                      <button
                        className="btn btn-info"
                        onClick={() => {
                          setEditingId(item.id);
                          setForm({
                            first_name: item.first_name,
                            last_name: item.last_name,
                            email: item.email,
                            jshshr: item.jshshr,
                            dob: item.dob,
                            adress: item.address,
                          });
                        }}
                      >
                        edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteItem(item.id)}
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
