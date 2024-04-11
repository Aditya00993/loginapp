import React from "react";

import {useNavigate} from 'react-router-dom'
function Naya() {
  const a = useNavigate()
function btn(){
  a('/user')
}
  return (
    <>
      <div className="container my-2 py-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="border w-100 h-100 px-3 py-5">
            <h2 className="text-left" style={{ fontWeight: "bold" }}>
              Signin to your <br />
              PopX account
            </h2>
            <p
              className="text-left"
              style={{ color: "grey", fontWeight: "900px" }}
            >
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </p>
            <form>
              <div className="form-group my-2">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#611bb7" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group my-3">
                <label
                  htmlFor="exampleInputPassword1"
                  style={{ color: "#611bb7" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="d-grid gap-2 my-3">
                <button
                  className="btn btn p-2"
                  type="button"
                  onClick={btn}
                  style={{
                    backgroundColor: "rgb(201, 173, 228)",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  Login
                </button>
              </div>
              <div style={{ height: "40vh", backgroundColor: "#fff" }}></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Naya;
