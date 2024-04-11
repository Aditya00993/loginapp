import {useNavigate} from 'react-router-dom'


function Login() {
  const nav =  useNavigate();
  function handleclick() {
    nav('/createaccount')
  }

  function handleclick2() {
    nav('/login')
  }
  return (
    <>
      <div className="container my-5 py-5 d-flex justify-content-center align-items-center">
        <div className="border w-100 h-100 px-3 py-5">
          <div style={{ height: "50vh", backgroundColor: "#fff" }}></div>
          <h2 className="text-left" style={{ fontWeight: "bold" }}>
            Welcome to PopX
          </h2>
          <p
            className="text-left"
            style={{ color: "grey", fontWeight: "900px" }}
          >
            Lorem ipsum dolor sit amet, <br />
            consectetur adipisicing elit.
          </p>
          <div className="d-grid gap-2">
            <button
              className="btn btn"
              type="button"
              onClick={handleclick}
              style={{
                backgroundColor: " #611bb7",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Create User
            </button>
            <button
              className="btn btn"
              type="button"
              onClick={handleclick2}
              style={{
                backgroundColor: "rgb(201, 173, 228)",
                fontWeight: "600",
                color: "#000",
                borderRadius: "5px",
              }}
            >
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
