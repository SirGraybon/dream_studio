import axios from "axios";
import { useEffect, useState } from "react";

const Login = function () {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    console.log(user);
  }, [user]);
  useEffect(() => {
    console.log(password);
  }, [password]);


  const authenticate = () => {
    axios.post("http://localhost:8001/users/login", {user, password});
  };

  return (
    <>
      <div>Login</div>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="User Name"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      
      <button onClick={() => authenticate()}> Log in</button>
    </>
  );
};

export default Login;
