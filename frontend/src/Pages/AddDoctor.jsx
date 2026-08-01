import { useState } from "react";
import "./AddDoctor.css";
import { addDoctor } from "../authApi";
import { useNavigate } from "react-router-dom";

function AddDoctors() {

  // ✅ useNavigate yahan hoga
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [qualification, setQualification] = useState("");
  const [experience, setExperience] = useState("");
  const [consultationFee, setConsultationFee] = useState("");
  const [hospital, setHospital] = useState("");
  const [address, setAddress] = useState("");
  const [timing, setTiming] = useState("");
  const [image, setImage] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("specialization", specialization);
      formData.append("qualification", qualification);
      formData.append("experience", experience);
      formData.append("consultationFee", consultationFee);
      formData.append("hospital", hospital);
      formData.append("address", address);
      formData.append("timing", timing);
      formData.append("image", image);

      const res = await addDoctor(formData);

      console.log(res.data);

      alert("Doctor Added Successfully");

      setName("");
      setSpecialization("");
      setQualification("");
      setExperience("");
      setConsultationFee("");
      setHospital("");
      setAddress("");
      setTiming("");
      setImage(null);

      e.target.reset();

      //  Ab ye sahi chalega
      navigate("/admin-dashboard");

    } catch (error) {
      console.log(error);
      console.log(error.response);

      alert(error.response?.data?.message || "Doctor Add Failed");
    }
  }

  return (
    <section className="add-doctor">
      <div className="doctor-form">
        <h2>Add New Doctor</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Doctor Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Qualification"
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />

          <input
            type="number"
            placeholder="Consultation Fee"
            value={consultationFee}
            onChange={(e) => setConsultationFee(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Hospital Name"
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Hospital Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Available Timing"
            value={timing}
            onChange={(e) => setTiming(e.target.value)}
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button type="submit">Add Doctor</button>

        </form>
      </div>
    </section>
  );
}

export default AddDoctors;