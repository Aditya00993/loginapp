import React from "react";

import {useNavigate} from 'react-router-dom'
export default function Account() {
 
    const a = useNavigate()
  function btn(){
    a('/login')
  }
  return (


    <>
      <div className="container my-2 py-2">
        <div className="d-flex justify-content-center align-items-center">
          <div className="border w-100 h-75 px-3 py-5">
            <h2 className="text-left" style={{ fontWeight: "bold" }}>
              Create your <br />
              PopX account
            </h2>
            <form>
              <div className="form-group my-2">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#611bb7" }}
                >
                  Name<sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                />
              </div>
              <div className="form-group my-3">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#611bb7" }}
                >
                  Phone number <sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter phone numer"
                />
              </div>
              <div className="form-group my-3">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#611bb7" }}
                >
                  Email address <sup style={{ color: "red" }}>*</sup>
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
                  Password <sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group my-3">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#611bb7" }}
                >
                  Company name Name<sup style={{ color: "red" }}>*</sup>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter company name"
                />
              </div>
              <span>
                Are you an agency? <sup style={{ color: "red" }}>*</sup>
              </span>
              <br />
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                  style={{ color: "#611bb7" }}
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  No
                </label>
              </div>
              <div style={{ height: "20vh", backgroundColor: "#fff" }}></div>
              <div className="d-grid gap-2 my-3">
                <button
                  className="btn btn p-2"
                  type="button"
                  onClick={btn}
                  style={{
                    backgroundColor: "#611bb7",
                    color: "#fff",
                    borderRadius: "5px",
                  }}
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
