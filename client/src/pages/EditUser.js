import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

import "./css/main.css";

export const EditUser = () => {
  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { full_name, username, email, phone, website } = user;

  // get user details with id(coming form params)
  const loadUser = async () => {
    await axios
      .get(`http://localhost:8000/contact/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  // this function will be hit when change any input field
  const handleChange = async (e) => {
    await setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // this function will be hit when user submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .put(`http://localhost:8000/contact/${id}`, user)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col col-md-2"></div>
          <div className="col col-md-8 mb-4 cardBorder">
            <form className="p-4" onSubmit={(e) => handleSubmit(e)}>
              <div class="form-group">
                <label for="exampleInputEmail1">Enter your name</label>
                <input
                  type="text"
                  name="full_name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={full_name}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Username</label>
                <input
                  type="text"
                  name="username"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Email</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={email}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Phone number</label>
                <input
                  type="number"
                  name="phone"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={phone}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">website</label>
                <input
                  type="text"
                  name="website"
                  class="form-control"
                  id="exampleInputPassword1"
                  value={website}
                  onChange={(e) => handleChange(e)}
                  required
                />
              </div>
              <button
                onSubmit={(e) => handleSubmit(e)}
                type="submit"
                class="btn btn-primary mb-3 mt-3 cardBorder"
              >
                Update user
              </button>
            </form>
          </div>
          <div className="col col-md-2"></div>
        </div>
      </div>
    </div>
  );
};
