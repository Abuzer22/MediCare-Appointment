import { useState } from "react";
import "./Doctors.css";
import DocList from "../components/Card";
import DocListforU from "../components/CardforU";

// const doctors = [
//   {
//     id: 1,
//     name: "Dr. Amit Kumar",
//     specialization: "Cardiologist",
//     experience: "12 Years Experience",
//      rating: "⭐⭐⭐⭐⭐ (5.0)",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCJzy4aSkYFE_gmA4yOSp-NsZq_gBwgZitWB0l3pl3uQsJPp0oJU48Oc8&s=10",
//     about:
//       "Expert in heart diseases, ECG, angioplasty and cardiac consultation.",
//   },
//   {
//     id: 2,
//     name: "Dr. Priya Sharma",
//     specialization: "Dentist",
//     experience: "8 Years Experience",
//      rating: "⭐⭐⭐⭐☆ (4.5)",
//     image: "https://st2.depositphotos.com/4153545/8174/i/950/depositphotos_81742850-stock-photo-indian-woman-doctor.jpg",
//     about:
//       "Specialist in smile designing, root canal treatment and dental surgery.",
//   },
//   {
//     id: 3,
//     name: "Dr. Rahul Singh",
//     specialization: "Neurologist",
//     experience: "10 Years Experience",
//     rating: "⭐⭐⭐⭐⭐ (4.9)",
//     image: "https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
//     about:
//       "Treats migraine, epilepsy and other neurological disorders.",
//   },
//   {
//     id: 4,
//     name: "Dr. Neha Verma",
//     specialization: "Pediatrician",
//     experience: "9 Years Experience",
//     rating: "⭐⭐⭐⭐☆ (4.6)",
//     image: "https://st.depositphotos.com/49005766/54607/i/1600/depositphotos_546073024-stock-photo-indian-female-doctor-portrait-south.jpg",
//     about:
//       "Child specialist with expertise in newborn and child healthcare.",
//   },
//   {
//     id: 5,
//     name: "Dr. Raj Mehta",
//     specialization: "Orthopedic",
//     experience: "11 Years Experience",
//     rating: "⭐⭐⭐⭐⭐ (4.8)",
//     image: "https://res.cloudinary.com/dj6szzv8r/image/upload/f_auto,q_auto/v1772441352/Gemini_Generated_Image_qgxb1wqgxb1wqgxb_q7dush.png",
//     about:
//       "Expert in bone, joint replacement and fracture treatment.",
//   },
//   {
//     id: 6,
//     name: "Dr. Anjali Gupta",
//     specialization: "Gynecologist",
//     experience: "14 Years Experience",
//      rating: "⭐⭐⭐⭐⭐ (5.0)",
//     image: "https://static.vecteezy.com/system/resources/previews/049/770/853/large_2x/indian-medical-student-indian-doctor-concept-of-education-photo.jpg",
//     about:
//       "Women's health expert including pregnancy and infertility care.",
//   },
//   {
//     id: 7,
//     name: "Dr. Vivek Sharma",
//     specialization: "General Physician",
//     experience: "15 Years Experience",
//      rating: "⭐⭐⭐⭐☆ (4.4)",
//     image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFsZSUyMGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D",
//     about:
//       "Experienced physician for fever, diabetes and general health checkups.",
//   },
//   {
//     id: 8,
//     name: "Dr. Pooja Sinha",
//     specialization: "Dermatologist",
//     experience: "7 Years Experience",
//      rating: "⭐⭐⭐⭐⭐ (4.9)",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3eSXencsXFfalVMzfPOb0L48QafrVZ71mPDkSpggJu2dXqmjuusJVbM&s=10",
//     about:
//       "Skin, hair and cosmetic treatment specialist.",
//   },
// ];

function Doctors() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  return (
    // <section className="doctors-section">

    //   <h1>Our Specialist Doctors</h1>
    //   <p>Choose the best doctor for your healthcare needs.</p>

    //   <div className="doctor-grid">

    //     {doctors.map((doctor) => (
    //       <div className="doctor-card" key={doctor.id}>

    //         <img src={doctor.image} alt={doctor.name} />

    //         <h2>{doctor.name}</h2>

    //         <h4>{doctor.specialization}</h4>

    //         <p>{doctor.experience}</p>

    //         {/* <div className="rating">⭐⭐⭐⭐⭐</div> */}
    //         <div className="rating">{doctor.rating}</div>

    //         <button
    //           className="view-btn"
    //           onClick={() => setSelectedDoctor(doctor)}
    //         >
    //           View Details
    //         </button>

    //         <button className="book-btn">
    //           Book Appointment
    //         </button>

    //       </div>
    //     ))}

    //   </div>

    //   {selectedDoctor && (
    //     <div className="doctor-details">

    //       <img
    //         src={selectedDoctor.image}
    //         alt={selectedDoctor.name}
    //       />

    //       <div>

    //         <h2>{selectedDoctor.name}</h2>

    //         <h3>{selectedDoctor.specialization}</h3>

    //         <p>{selectedDoctor.about}</p>

    //         <button className="book-btn">
    //           Book Appointment
    //         </button>

    //       </div>

    //     </div>
    //   )}

    // </section>

    <DocListforU />


  );
}

export default Doctors;