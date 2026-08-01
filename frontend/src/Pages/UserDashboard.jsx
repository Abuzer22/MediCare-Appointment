import "./UserDashboard.css";
import DocListforU from "../components/CardforU";
import { useNavigate } from "react-router-dom";


function UserDashboard() {

  const navigate = useNavigate();

  const logoutFun = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (

    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      <p>Welcome User</p>
      <DocListforU />
      <br />
      <button id="logout" onClick={() => logoutFun()}>Logout</button>
      {/* <li onClick={() => logoutFun()}>
          Logout
        </li> */}



    </div>
  );
}

export default UserDashboard;