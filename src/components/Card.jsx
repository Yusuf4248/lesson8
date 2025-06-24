const Card = ({ item, setOpen, setUpdate, deleteItem }) => {
  const openModal = (item) => {
    setOpen(true);
    setUpdate(item);
  };
  return (
    <div className="card" key={item.id}>
      <div className="card-body">
        <img src={item.img} alt="" className="w-100 rouded-1" />
      </div>
      <div className="card-footer">
        <h3 className="text-center">{item.name}</h3>
        <div className="d-flex justify-content-between">
          <p>{item.price}</p>
          <p>{item.quantity}</p>
          <div className="d-flex gap-2">
            <button className="btn btn-info" onClick={() => openModal(item)}>
              update
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteItem(item.id)}
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
