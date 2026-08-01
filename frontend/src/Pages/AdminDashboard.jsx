import "./AdminDashboard.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Sidebar from "../components/UserDashboard/Sidebar";
import { allAppointment, } from "../authApi";
import DocList from "../components/Card";
function AdminDashboard() {

  // for appointment 
  const [appointments, setAllAppointment] = useState([]);

  useEffect(() => {
    loadAppointment();
  }, [])


  const loadAppointment = async () => {
    try {
      const res = await allAppointment();
      console.log("res from get all appointment", res)
      setAllAppointment(res?.data?.appointmentlist)
    } catch (error) {
      console.log(error)
      alert(error?.response?.data?.message)
    }
  }


  const navigate = useNavigate();

  const [activeMenu, setActiveMenu] = useState("dashboard");
  return (
    <div className="admin-dashboard">

      {/* Sidebar */}
      <Sidebar
        setActiveMenu={setActiveMenu}
        navigate={navigate}
      />

      {/* Main Content */}
      <div className="dashboard-content">

        {/* Dashboard */}
        {activeMenu === "dashboard" && (
          <>

            <h1>Welcome, Admin Dashboard</h1>

            <p>Manage your appointments easily.</p>

            <div className="dashboard-cards">

              <div className="card">
                <h2>8</h2>
                <p>Total Appointments</p>
              </div>
              <div className="card">
                <h2>2</h2>
                <p>Upcoming Appointments</p>
              </div>

              <div className="card">
                <h2>25</h2>
                <p>Available Doctors</p>
              </div>

            </div>

            {/* <div className="appointment-table">

              <h2>Recent Appointments</h2>

              <table>

                <thead>
                  <tr>
                    <th>Doctor</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Dr. Amit Kumar</td>
                    <td>20 July 2026</td>
                    <td>Confirmed</td>
                  </tr>

                  <tr>
                    <td>Dr. Priya Sharma</td>
                    <td>25 July 2026</td>
                    <td>Pending</td>
                  </tr>

                </tbody>

              </table>

            </div> */}

          </>
        )}

        {/* My Appointments */}

        {activeMenu === "appointments" && (

          <div className="appointment-page">

            <h1>My Appointments</h1>

            <table>

              <thead>

                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Doctor</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>

              </thead>

              <tbody>

                {/* <tr>
                  <td>Dr. Amit Kumar</td>
                  <td>Cardiologist</td>
                  <td>20 July 2026</td>
                  <td>10:30 AM</td>
                  <td className="confirmed">Confirmed</td>
                </tr>

                <tr>
                  <td>Dr. Priya Sharma</td>
                  <td>Dentist</td>
                  <td>25 July 2026</td>
                  <td>2:00 PM</td>
                  <td className="pending">Pending</td>
                </tr>

                <tr>
                  <td>Dr. Rahul Singh</td>
                  <td>Neurologist</td>
                  <td>29 July 2026</td>
                  <td>11:00 AM</td>
                  <td className="cancelled">Cancelled</td>
                </tr> */}

                {
                  appointments?.map((appointment) => (
                    <tr key={appointment._id}>
                      <td>{appointment.name}</td>
                      <td>{appointment.email}</td>
                      <td>{appointment.phone}</td>
                      <td>{appointment.age}</td>
                      <td>{appointment.gender}</td>
                      <td>{appointment.doctor}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>{appointment.status} </td>
                      {/* <td><Link
                        to={`/edit/${appointment._id}`}
                        className="btn btn-warning"
                      >
                        Edit
                      </Link></td> */}
                      {/* <td className="btn btn-danger" onClick={() => deleteUserById(appointment._id)}> Delete</td> */}
                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>

        )}

        {/* Doctors */}

        {activeMenu === "doctors" && (

          <div className="dashboard-doctors">


            <h1>Available Doctors</h1>

            <div className="btn-container">
              <button
                className="add-btn"
                onClick={() => navigate("/addDoctors")}
              >
                Add Doctor
              </button>
            </div>
            <div className="doctor-list">

<DocList />

              {/* <div className="doctor-box">

                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJzy4aSkYFE_gmA4yOSp-NsZq_gBwgZitWB0l3pl3uQsJPp0oJU48Oc8&s=10"
                  alt="Doctor"
                />

                <h3>Dr. Amit Kumar</h3>

                <p>Cardiologist</p>

                <p>⭐ 4.9</p>

                <button>Book Appointment</button>

              </div> */}

              {/* <div className="doctor-box">

                <img
                  src="https://st2.depositphotos.com/4153545/8174/i/950/depositphotos_81742850-stock-photo-indian-woman-doctor.jpg"
                  alt="Doctor"
                />

                <h3>Dr. Priya Sharma</h3>

                <p>Dentist</p>

                <p>⭐ 4.8</p>

                <button>Book Appointment</button>

              </div>

              <div className="doctor-box">

                <img
                  src="https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg="
                  alt="Doctor"
                />

                <h3>Dr. Rahul Singh</h3>

                <p>Neurologist</p>

                <p>⭐ 4.7</p>

                <button>Book Appointment</button>

              </div> */}

            </div>

          </div>

        )}

        {/* Profile */}

        {activeMenu === "profile" && (

          <div className="profile-page">

            <h1>My Profile</h1>

            <h3>Name : admin</h3>

            <p>Email : admin@gmail.com</p>

            <p>Phone : +91 6201084280</p>

            <p>Role : admin</p>

          </div>

        )}

      </div>

    </div>

  );
}

export default AdminDashboard;