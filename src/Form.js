import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Form.css";

function Form() {
  const [User, setuser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [error, seterror] = useState({
    userfirstname: null,
    userlastname: null,
    useremail: null,
    userpassword: null,
  });

  let name, value;
  const getuserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...User, [name]: value });
  };

  const submitdata = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password } = User;

    if (!firstname.trim()) {
      error.userfirstname = "Required";
      seterror(() => ({
        userfirstname: error.userfirstname,
      }));
    } else if (!lastname.trim()) {
      error.userlastname = "Required";
      seterror(() => ({
        userlastname: error.userlastname,
      }));
    } else if (!email) {
      error.useremail = "Required";
      seterror(() => ({
        useremail: error.useremail,
      }));
    } else if (!/[^\s@]+@[^\s@]+\.[^\s@]+/.test(email)) {
      error.useremail = "Email address is invalid";
      seterror(() => ({
        useremail: error.useremail,
      }));
    } else if (!password) {
      error.userpassword = "Required";
      seterror(() => ({
        userpassword: error.userpassword,
      }));
    } else if (password.length < 6) {
      error.userpassword = "Password needs to be 6 characters or more";
      seterror(() => ({
        userpassword: error.userpassword,
      }));
    } else {
      setuser({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      seterror((olddata) => ({
        ...(olddata = null),
      }));
      alert("User added successfully");
    }
  };

  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <h4 className="text-center position-absolute top-0 my-1">WebGlory</h4>
      <div
        className="d-flex flex-column align-items-center "
        style={{
          width: "340px",
          height: "fit-content",
          backgroundColor: "#d1d5de",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <small className="fw-bold mb-2" style={{ color: "#595959" }}>
          Sign up with
        </small>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-google mx-2 google-logo"
            viewBox="0 0 16 16"
          >
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-facebook mx-2 facebook-logo"
            viewBox="0 0 16 16"
          >
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        </div>
        <small className="fw-bold my-2" style={{ color: "#9c9c9c" }}>
          Or Sign up with credentials
        </small>
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-6">
            <label
              style={{ fontSize: "12px" }}
              for="validationCustom01"
              className="form-label fw-bold text-secondary"
            >
              FIRSTNAME
            </label>
            {error.userfirstname ? (
              <input
                type="text"
                className="form-control"
                placeholder="FirstName"
                id="validationCustom01"
                name="firstname"
                style={{
                  border: "1px solid red",
                  fontSize: "13px",
                  padding: "5px 5px",
                }}
                required
                value={User.firstname}
                onChange={getuserdata}
              />
            ) : (
              <input
                type="text"
                className="form-control"
                placeholder="FirstName"
                id="validationCustom01"
                style={{
                  fontSize: "13px",
                  padding: "5px 5px",
                  border: "1px solid grey",
                }}
                name="firstname"
                required
                value={User.firstname}
                onChange={getuserdata}
              />
            )}

            {error.userfirstname ? (
              <small className="errormessage">{error.userfirstname}</small>
            ) : null}
          </div>
          <div className="col-6">
            <label
              style={{ fontSize: "12px" }}
              for="validationCustom02"
              className="form-label fw-bold text-secondary"
            >
              LASTNAME
            </label>
            {error.userlastname ? (
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="LastName"
                style={{
                  border: "1px solid red",
                  fontSize: "13px",
                  padding: "5px 5px",
                }}
                id="validationCustom02"
                value={User.lastname}
                onChange={getuserdata}
                required
              />
            ) : (
              <input
                type="text"
                className="form-control"
                name="lastname"
                placeholder="LastName"
                style={{
                  fontSize: "13px",
                  padding: "5px 5px",
                  border: "1px solid grey",
                }}
                id="validationCustom02"
                value={User.lastname}
                onChange={getuserdata}
                required
              />
            )}

            {error.userlastname ? (
              <small className="errormessage">{error.userlastname}</small>
            ) : null}
          </div>

          <div className="col-md-12">
            <label
              style={{ fontSize: "12px" }}
              for="validationCustom03"
              className="form-label fw-bold text-secondary"
            >
              EMAIL
            </label>
            {error.useremail ? (
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email/Username"
                value={User.email}
                style={{
                  border: "1px solid red",
                  fontSize: "13px",
                  padding: "5px 5px",
                }}
                onChange={getuserdata}
                id="validationCustom03"
                required
              />
            ) : (
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email/Username"
                style={{
                  fontSize: "13px",
                  padding: "5px 5px",
                  border: "1px solid grey",
                }}
                value={User.email}
                onChange={getuserdata}
                id="validationCustom03"
                required
              />
            )}

            {error.useremail ? (
              <small className="errormessage">{error.useremail}</small>
            ) : null}
          </div>
          <div className="col-md-12">
            <label
              style={{ fontSize: "12px" }}
              for="validationCustom03"
              className="form-label fw-bold text-secondary"
            >
              PASSWORD
            </label>
            {error.userpassword ? (
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={User.password}
                style={{
                  border: "1px solid red",
                  fontSize: "13px",
                  padding: "5px 5px",
                }}
                onChange={getuserdata}
                id="validationCustom03"
                required
              />
            ) : (
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                style={{
                  fontSize: "13px",
                  padding: "5px 5px",
                  border: "1px solid grey",
                }}
                value={User.password}
                onChange={getuserdata}
                id="validationCustom03"
                required
              />
            )}

            {error.userpassword ? (
              <small className="errormessage">{error.userpassword}</small>
            ) : null}
          </div>

          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="invalidCheck"
                required
              />
              <label
                style={{ fontSize: "12px" }}
                className="form-check-label"
                for="invalidCheck"
              >
                I agree to accept WebGlory{" "}
                <Link to="#" style={{ textDecoration: "none" }}>
                  {" "}
                  Service Agreement{" "}
                </Link>{" "}
                and{" "}
                <Link to="#" style={{ textDecoration: "none" }}>
                  {" "}
                  Privacy Policy
                </Link>
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div className="col-12">
            <button
              onClick={submitdata}
              className="btn btn-dark col-12"
              type="submit"
            >
              CREATE ACCOUNT
            </button>
          </div>
        </form>
      </div>
      <div
        className="my-2 py-2"
        style={{
          textAlign: "center",
          border: "1px solid grey",
          width: "340px",
          height: "fit-content",
          backgroundColor: "#dfe2e8",
        }}
      >
        Already have Account?
        <Link to="#" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Form;
