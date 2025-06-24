import { useState } from "react";

function Player() {
  const [form, setForm] = useState({
    name: "",
    number: "",
    position: "",
    club: "",
  });
  const [players, setPlayers] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const submit = () => {
    if (form.name && form.number && form.position && form.club) {
      setPlayers([...players, { ...form, id: Date.now() }]);
      setForm({ name: "", number: "", position: "", club: "" });
    }
  };

  return (
    <div className="container">
      <div className=" col-md-12 mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Football player</h2>
              </div>
              <div className="card-body">
                <form action="">
                  <input
                    type="text"
                    name="name"
                    className="form-control my-3"
                    placeholder="Name"
                    onChange={handleChange}
                    value={form.name}
                  />
                  <input
                    type="text"
                    name="number"
                    className="form-control my-3"
                    placeholder="Player number"
                    onChange={handleChange}
                    value={form.number}
                  />
                  <input
                    type="text"
                    name="position"
                    className="form-control my-3"
                    placeholder="Position"
                    onChange={handleChange}
                    value={form.position}
                  />
                  <input
                    type="text"
                    name="club"
                    className="form-control my-3"
                    placeholder="Club"
                    onChange={handleChange}
                    value={form.club}
                  />
                </form>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={submit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Name</th>
                  <th>Player Number</th>
                  <th>Position</th>
                  <th>Club</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, index) => (
                  <tr key={player.id}>
                    <td>{index + 1}</td>
                    <td>{player.name}</td>
                    <td>{player.number}</td>
                    <td>{player.position}</td>
                    <td>{player.club}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
