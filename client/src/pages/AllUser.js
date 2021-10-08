import React, { useState, useEffect } from "react";
import axios from "axios";
import { Users } from "../components/Users";
import { Link } from "react-router-dom";

import "./css/main.css";

function AllUser() {
  const [users, setUsers] = useState([]);

  // getting all user data and set it to useState
  const getUser = async () => {
    await axios
      .get("http://localhost:8000/contact")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);

  // this function will be fire when user click on delete button
  const onDelete = async (id) => {
    await axios
      .delete(`http://localhost:8000/contact/${id}`)
      .then((res) => {
        setUsers(
          users.filter((user) => {
            return user.id !== id;
          })
        );
      })
      .catch((err) => alert(err));
  };

  return (
    <>
      <div>
        <Link to="/adduser">
          <button className="btn btn-primary btn-sm float-left ml-3 mt-3">
            Add new user
          </button>
        </Link>
      </div>

      {/* user table */}
      <div className="container mt-4">
        <div className="row">
          <div className="col col-md-1"></div>
          <div className="col col-md-10 mb-4 cardBorder">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Contact</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <h2>User Not found</h2>
                ) : (
                  users.map(({ id, username, email, phone }, key) => {
                    return (
                      <tr>
                        <Users
                          id={id}
                          username={username}
                          email={email}
                          phone={phone}
                          key={key}
                          onDelete={onDelete}
                        />
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
          <div className="col col-md-1"></div>
        </div>
      </div>
    </>
  );
}

export default AllUser;
