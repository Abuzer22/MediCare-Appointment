
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import Doctors from "./Pages/Doctors";
import AddDoctors from "./Pages/AddDoctor";
import UpdateDoc from "./Pages/UpdateDoc";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserDashboard from "./Pages/userdashboard";
import AdminDashboard from "./Pages/AdminDashboard";

// Common Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Layout() {

  const location = useLocation();

  const hideLayout =
    location.pathname === "/user-dashboard" ||
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/addDoctors" ||
    location.pathname === "/appointment" ;


  return (
    <>

      {!hideLayout && <Navbar />}

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/addDoctors" element={<AddDoctors />} />

        <Route path="/updateDoc/:id" element={<UpdateDoc />} />

        <Route path="/appointment" element={<Appointment />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/user-dashboard"
          element={<UserDashboard />}
        />

        <Route
          path="/admin-dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

      {!hideLayout && <Footer />}

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
