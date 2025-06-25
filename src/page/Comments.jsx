import axios from "axios";
import { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=5`
      )
      .then((res) => {
        setComments(res.data);
      });
  }, [page]);
  return (
    <div className="container">
      <div className="row">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>PostId</th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {comments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.postId}</td>
                <td>{comment.id}</td>
                <td>{comment.name}</td>
                <td>{comment.email}</td>
                <td>{comment.body}</td>
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

export default Comments;
