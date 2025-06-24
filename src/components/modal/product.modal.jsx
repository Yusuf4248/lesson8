import React, { useState } from "react";
import { Modal, ModalFooter, ModalBody, ModalHeader } from "reactstrap";

const ProductModal = ({ isOpen, toggle, products, setProducts, update }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    sale: "",
    quantity: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (update == null) {
      setProducts([
        ...products,
        { ...form, img: "./src/assets/macbook.jpg", id: products.length + 1 },
      ]);
    } else {
      products.forEach((item) => {
        if (item.id == update.id) {
          item.name = form.name ? form.name : update.name;
          item.price = form.price ? form.price : update.price;
          item.sale = form.sale ? form.sale : update.sale;
          item.quantity = form.quantity ? form.quantity : update.quantity;
        }
        setProducts([...products]);
      });
    }
    toggle();
  };
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader>
        {update == null ? (
          <span>Add product</span>
        ) : (
          <span>Update product</span>
        )}
      </ModalHeader>
      <ModalBody>
        <form id="product">
          <input
            type="text"
            defaultValue={update?.name}
            name="name"
            placeholder="Name..."
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="number"
            defaultValue={update?.price}
            name="price"
            placeholder="Price..."
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="number"
            defaultValue={update?.sale}
            name="sale"
            placeholder="Sale..."
            onChange={handleChange}
            className="form-control my-2"
          />
          <input
            type="number"
            name="quantity"
            defaultValue={update?.quantity}
            placeholder="Quantity..."
            onChange={handleChange}
            className="form-control my-2"
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
        <button className="btn btn-info" form="product" onClick={handleSubmit}>
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ProductModal;
