import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./css/main.css";

export const AddUser = () => {
  const history = useHistory();
  const [newUsers, setNewUsers] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  // this function will be fire when change any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUsers({
      ...newUsers,
      [name]: value,
    });
  };

  // this function will be fire when user submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8000/contact`, newUsers)
      .then((res) => {
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="">
        <div className="container mt-5">
          <div className="row">
            <div className="col col-md-2"></div>
            <div className="col col-md-8 mb-5 cardBorder">
              <form className="p-4" onSubmit={handleSubmit}>
                <div class="form-group">
                  <label for="exampleInputEmail1">Enter your name</label>
                  <input
                    type="text"
                    name="full_name"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  class="btn btn-primary mb-3 cardBorder"
                >
                  Add user
                </button>
              </form>
            </div>
            <div className="col col-md-2"></div>
          </div>
        </div>
      </div>
    </>
  );
};
