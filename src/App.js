import Login from "./Login";
import Naya from "./Naya";
import Account from "./Account";
import { User } from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Naya />} />
          <Route path="/createaccount" element={<Account />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
