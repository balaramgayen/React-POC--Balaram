import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import "./css/main.css";

export const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    full_name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { full_name, username, email, phone, website } = user;

  // getting user detail with id(coming from params)
  const loadUser = async () => {
    await axios
      .get(`http://localhost:8000/contact/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col col-md-4"></div>
          <div className="col col-md-4">
            <div className="cardBorder">
              <div className="card-header text-center">User Details</div>
              <div className="card-body">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  class="card-img-top mb-3"
                  alt="..."
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                />
                <h4 className="card-title text-capitalize text-center">
                  name: {full_name}
                </h4>
                <p className="card-text mt-5">Username: {username}</p>
                <p className="card-text">email: {email}</p>
                <p className="card-text">Contact No: {phone}</p>
                <p className="card-text">
                  website:&nbsp;&nbsp;
                  <a
                    href={website}
                    target="_blank"
                    rel="noreferrer"
                    className="card-text"
                  >
                    {website}
                  </a>
                </p>
                <Link to="/">
                  <button className="cardBorder btn btn-primary center mt-5">
                    Back to home
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col col-md-4"></div>
        </div>
      </div>
    </>
  );
};
