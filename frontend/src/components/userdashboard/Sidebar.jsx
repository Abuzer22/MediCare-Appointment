function Sidebar({ setActiveMenu, navigate }) {
  const logoutFun = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <div className="sidebar">

      <h2>Medicare</h2>

      <ul>

        <li onClick={() => setActiveMenu("dashboard")}>
          Dashboard
        </li>

        <li onClick={() => setActiveMenu("appointments")}>
          All Appointments
        </li>

        <li onClick={() => setActiveMenu("doctors")}>
          Doctors
        </li>

        <li onClick={() => setActiveMenu("profile")}>
          My Profile
        </li>

        <li onClick={() => logoutFun()}>
          Logout
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;