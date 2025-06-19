import { useState } from "react";
import "./App.css";

function Task1() {
  const [distance, setDistance] = useState(0);
  const [stepSize, setStepSize] = useState(1);
  const yurish = () => {
    setDistance(distance + stepSize);
  };
  const qadamniKengaytirish = () => {
    setStepSize(stepSize + 1);
  };
  return (
    <div className="text-center my-5">
      <h1>{distance} metr</h1>

      <button onClick={yurish}>yurish</button>

      <p>Qadam kattaligi: {stepSize} metr</p>

      <button onClick={qadamniKengaytirish}>qadamni kengaytirish</button>
    </div>
  );
}

function Task2() {
  const [counters, setCounters] = useState([{ id: Date.now(), count: 0 }]);

  function handleIncrement(counter) {
    setCounters(
      counters.map((c) =>
        c.id === counter.id ? { ...c, count: c.count + 1 } : c
      )
    );
  }

  function handleDecrement(counter) {
    setCounters(
      counters.map((c) =>
        c.id === counter.id ? { ...c, count: c.count - 1 } : c
      )
    );
  }

  function addCounter() {
    setCounters([...counters, { id: Date.now(), count: 0 }]);
  }

  function Counter({ id, onIncrement, onDecrement }) {
    return (
      <div>
        <button onClick={() => onDecrement(id)}>-</button>
        <span>{id.count}</span>
        <button onClick={() => onIncrement(id)}>+</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={addCounter}>Add counter</button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          id={counter}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
    </div>
  );
}

function Task3() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayText, setDisplayText] = useState("Login");

  const handleLoginLogout = () => {
    if (!isLoggedIn) {
      setIsLoggedIn(true);
      setDisplayText("welcome");
    } else {
      setIsLoggedIn(false);
      setDisplayText("Login");
    }
  };

  return (
    <div className="container">
      <div className="col-md-12 mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h2 className="text-center">Authentication</h2>
              </div>
              <div className="card-body text-center">
                <h3>{displayText}</h3>
                <button
                  className="btn btn-primary w-100 mt-3"
                  onClick={handleLoginLogout}
                >
                  {isLoggedIn ? "Logout" : "Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Task4() {
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
export { Task2, Task1, Task3, Task4 };
