import React from "react";
import { Link } from "react-router-dom";

export const Users = ({ id, username, email, phone, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>
        <Link to={`/userdetails/${id}`}>
          <button className="btn btn-sm btn-outline-primary mr-2">
            <i class="uil uil-user-square"></i>
          </button>
        </Link>
        <Link to={`/edituser/${id}`}>
          <button className="btn btn-sm btn-outline-warning mr-2">
            <i class="uil uil-edit"></i>
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="btn btn-sm btn-outline-danger"
        >
          <i class="uil uil-trash-alt"></i>
        </button>
      </td>
    </>
  );
};
