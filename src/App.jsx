import Users from "./page/Users";
import Comments from "./page/Comments";
import Product from "./page/Product";
import { Routes, Route } from "react-router-dom";
import Counter from "./page/counter";
import Home from "./page/Home";
import SingleUser from "./page/SingleUser";
const App = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<SingleUser />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/products" element={<Product />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
