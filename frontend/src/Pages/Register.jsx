import "./Register.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../authApi";

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();

    try {


      const data = { name, email, password, age, phone, gender }


      const res = await registerUser(data);

      console.log("res from reg", res);
      localStorage.setItem("token", res.data.token);
      alert("Register Successfully");
      navigate("/user-dashboard");
    } catch (error) {
      console.log(error)
      alert(error)
    }

  }

  return (
    <section className="register">

      <div className="register-box">

        <h1>Create Account</h1><br />

        <p>Register to book your doctor appointment.</p>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Full Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div>
            {/* <select
              required
              >
              <option value="">-- Select Gender --</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
              </select> */}
            <select name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
             required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          </div>
          
          <input
            type="number"
            placeholder="Enter age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />


          <input
            type="email"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />



          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-link">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </section>
  );
}

export default Register;