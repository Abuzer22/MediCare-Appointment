import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { loginUser } from "../authApi";

import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin (e){
    e.preventDefault();

    // Admin Login
    // if (

    //   email === "admin@gmail.com" &&
    //   password === "admin123"

    // ) {
    //   navigate("/admin-dashboard");
    // }

    // else if (
    //   email === "user@gmail.com" &&
    //   password === "user123"
    // ) {

    //   navigate("/user-dashboard");

    // }

    // else {

    //   alert("Invalid Email or Password");

    // }
    try {

      const data = {
        email, password
      }

      const res = await loginUser(data);
      console.log("res.form login", res)

      localStorage.setItem("token", res.data.token)
      alert("login success")

      const ROLE = res.data.user.role;
      ROLE === "admin" ? navigate("/admin-dashboard") : navigate("/user-dashboard");
    } catch (error) {
      console.log(error)
      // console.log(error?.response?.data?.message);
      // alert(error?.response?.data?.message)
      alert(error)
    }
  }

  return (
    <section className="login">

      <div className="login-box">

        <h1>Welcome <br />
          Back</h1>

        <p>Login to your Medicare Appointment account</p>

        <form onSubmit={handleLogin}>

          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account? <Link to="/register">Register Now</Link>
        </p>

      </div>

    </section>
  );
}

export default Login;