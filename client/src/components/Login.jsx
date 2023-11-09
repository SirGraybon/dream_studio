import axios from "axios";
import { useEffect, useState } from "react";

const Login = function (setUser) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");



  const authenticate = () => {
    axios.post("http://localhost:8001/users/login", {username, password})
    .then((res) => {
      console.log(res.data)
      res.data && setUser(username)
    });
  };

  return (
    <>
      <div>Login</div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
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
