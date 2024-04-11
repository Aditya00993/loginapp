import React from "react";

export const User = () => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center my-4 ">
          <div className="border w-100 h-100">
            <div className="my-4">
              <p style={{ fontSize: "22px" }} className="mx-3">
                Account Settings
              </p>
              <div
                className="border w-100 h-100 px-3 py-5"
                style={{ backgroundColor: "whitesmoke" }}
              >
                <div className="d-flex">
                  <img src="im.png" alt="No" />
                  <div>
                    <h5>Marry Doe</h5>
                    <p style={{ marginBottom: "0" }}>Marry@Gmail.com</p>
                  </div>
                </div>

                <p className="text-left my-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                  elit.Laudantium eveniet quo porro esse perferendis fuga fugiat
                  laboriosam officia.
                </p>
              </div>
              <div
                style={{ height: "40vh", backgroundColor: "whitesmoke" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
