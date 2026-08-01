import "./Appointment.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { appointment } from "../authApi";


function Appointment() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState()
  const [gender, setGender] = useState()
  const [doctor, setDoctor] = useState()
  const [time, setTime] = useState("")
  const [date, setDate] = useState()
  const navigate = useNavigate()

  async function handleAppointment(e) {
    e.preventDefault();

    try {
      const data = { name, email, phone, age, gender, doctor, time, date }

      const res = await appointment(data);

      console.log("res from reg", res);
      alert("Register Successfully");
      navigate("/user-dashboard");
    }
    catch (error) {
      console.log(error)
      alert(error)
    }

  }



  return (
    <section className="appointment">

      <div className="appointment-box">

        <h1>Book Your Appointment</h1>

        <form onSubmit={handleAppointment}>

          <div className="input-group">

            <input
              type="text"
              placeholder="Full Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="input-group">

            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              type="number"
              placeholder="Age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />

          </div>

          <div className="input-group">

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >

              <option>Select Gender</option>

              <option value="Male">Male</option>

              <option value="Female">Female</option>

              <option value="Other">Other</option>

            </select>

            <select
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              required
            >

              <option>Select Doctor</option>

              <option value="Dr.Amit">Dr. NEERAJ JHA</option>

              <option value="Dr.Riya">Dr. SHIVANGI SINGH</option>
              
              <option>Dr. RAM SRIVASTAVA</option>

              <option>Dr. RASHMI PRASHAD</option>

              <option>Dr. Raj Mehta</option>

              <option>Dr. Anjali Gupta</option>

              <option>Dr. Vivek Sharma</option>

              <option>Dr. Pooja Sinha</option>

            </select>

          </div>

          <div className="input-group">

            <input type="time"
              placeholder="Appointment Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}

            />

            <input type="date"
              placeholder="Appointment Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

          </div>

          <button>
            Book Appointment
          </button>

        </form>

      </div>

    </section>
  );
}

export default Appointment;