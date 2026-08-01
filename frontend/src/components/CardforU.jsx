import { useState, useEffect } from "react";
import { deleteDoctorById, getAllDoctor } from "../authApi";
import { useNavigate } from "react-router-dom";

function DocListforU() {

    const [allDoctor, setAllDoctor] = useState([])

    const navigate = useNavigate();

    useEffect(() => {
        loadDoctors();
    }, [])

    const loadDoctors = async () => {
        try {
            const res = await getAllDoctor();
            console.log("res from all Doctor ", res)
            setAllDoctor(res?.data?.doctorslist)
            console.log("res", res)
        } catch (error) {
            console.log(error)
            alert(error?.response?.data?.message)
        }
    }

    const deleteFun = async (id) => {
        try {
            alert("Are You sure?")
            const res = await deleteDoctorById(id);
            console.log("res", res)
            loadDoctors()
        } catch (error) {
            console.log(error)

        }}

        
        function bookAppointments(){
            const token=localStorage.getItem("token")
            return !token? navigate("/login"):navigate("/appointment")
        }
        return (
            <>
               
                <div className="container-fluid mt-4">
                    <div className="row g-4">
                        {allDoctor?.map((doctor) => (


                            <div className="col-lg-3 col-md-4 col-sm-6" key={doctor._id}>
                                <div className="doctor-card">
                                    <img
                                        src={`http://localhost:5000/${doctor.image}`}
                                        alt={doctor.name}
                                    />

                                    <h4>{doctor.name}</h4>

                                    <p>{doctor.specialization}</p>

                                    <p>⭐ {doctor.rating || "4.8"}</p>

                                    <button onClick={()=> bookAppointments()}>Book Appointment</button>
                                    {/* <button onClick={() => navigate(`/updateDoc/${doctor._id}`)}>Update</button>
                                    <button onClick={() => deleteFun(doctor._id)}>Delete</button> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    export default DocListforU;