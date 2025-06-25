import { useState } from "react";

const Counter = () => {
  const [counters, setCounters] = useState([]);
  const addCounter = () => {
    setCounters([...counters, { id: Date.now(), count: 0 }]);
  };
  const changeCounter = (id, type) => {
    setCounters((prev) =>
      prev.map((c) => {
        if (c.id === id) {
          return {
            id: c.id,
            count: c.count + type,
          };
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div>
      <button onClick={addCounter}>Add counter</button>
      {counters.map((counter) => (
        <div key={counter.id}>
          <button onClick={() => changeCounter(counter.id, -1)}>-</button>
          <span>{counter.count}</span>
          <button onClick={() => changeCounter(counter.id, 1)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Counter;
