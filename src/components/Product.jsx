import { useState } from "react";
import Card from "./Card";
import ProductModal from "./modal/product.modal";
const Product = () => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [update, setUpdate] = useState(null);
  const toggle = () => {
    setOpen(false);
    setUpdate(null);
  };
  const deleteItem = (id) => {
    let newProducts = products.filter((item) => item.id !== id);
    setProducts([...newProducts]);
  };
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/macbook.jpg",
    },
    {
      id: 2,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/macbook.jpg",
    },
    {
      id: 3,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/macbook.jpg",
    },
    {
      id: 4,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/macbook.jpg",
    },
  ]);
  return (
    <div className="container">
      <ProductModal
        isOpen={open}
        update={update}
        toggle={toggle}
        products={products}
        setProducts={setProducts}
      />
      <div className="row my-3">
        <div className="col-md-3">
          <button className="btn btn-success" onClick={() => setOpen(true)}>
            open modal
          </button>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search... "
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="row mt-3">
        {products.filter((item) => {
          if (search.length == 0) {
            return item;
          } else if (item.name.includes(search)) {
            return item;
          }
        }).length > 0 ? (
          products
            .filter((item) => {
              if (search.length == 0) {
                return item;
              } else if (item.name.includes(search)) {
                return item;
              }
            })
            .map((item) => (
              <div className="col-md-4" key={item.id}>
                <Card
                  item={item}
                  setOpen={setOpen}
                  setUpdate={setUpdate}
                  deleteItem={deleteItem}
                />
              </div>
            ))
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
    </div>
  );
};
export default Product;
