import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateDoc, getDoctorById } from "../authApi";

function UpdateDoc() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({
    name: "",
    specialization: "",
    qualification: "",
    experience: "",
    consultationFee: "",
    hospital: "",
    address: "",
    timing: "",
    image: null,
  });

  useEffect(() => {
    loadDoctor();
  }, []);

  const loadDoctor = async () => {
    try {
      const res = await getDoctorById(id);

      console.log("Doctor Data:", res.data);

      setDoctor({
        name: res.data.doctor.name || "",
        specialization: res.data.doctor.specialization || "",
        qualification: res.data.doctor.qualification || "",
        experience: res.data.doctor.experience || "",
        consultationFee: res.data.doctor.consultationFee || "",
        hospital: res.data.doctor.hospital || "",
        address: res.data.doctor.address || "",
        timing: res.data.doctor.timing || "",
        image: res.data.doctor.image || null,
      });
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Failed to load doctor.");
    }
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;

    if (type === "file") {
      setDoctor((prev) => ({
        ...prev,
        image: files[0],
      }));
    } else {
      setDoctor((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", doctor.name);
    formData.append("specialization", doctor.specialization);
    formData.append("qualification", doctor.qualification);
    formData.append("experience", doctor.experience);
    formData.append("consultationFee", doctor.consultationFee);
    formData.append("hospital", doctor.hospital);
    formData.append("address", doctor.address);
    formData.append("timing", doctor.timing);

    // New image selected
    if (doctor.image instanceof File) {
      formData.append("image", doctor.image);
    }

    try {
      await updateDoc(id, formData);
      alert("Doctor Updated Successfully");
      navigate("/admin-dashboard");
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Update Failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Update Doctor</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Doctor Name"
              value={doctor.name}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="specialization"
              placeholder="Specialization"
              value={doctor.specialization}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="qualification"
              placeholder="Qualification"
              value={doctor.qualification}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="experience"
              placeholder="Experience"
              value={doctor.experience}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="number"
              className="form-control"
              name="consultationFee"
              placeholder="Consultation Fee"
              value={doctor.consultationFee}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="hospital"
              placeholder="Hospital"
              value={doctor.hospital}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="address"
              placeholder="Address"
              value={doctor.address}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <input
              type="text"
              className="form-control"
              name="timing"
              placeholder="Timing"
              value={doctor.timing}
              onChange={handleChange}
            />
          </div>

          <div className="col-12 mb-3">
            <input
              type="file"
              className="form-control"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          {doctor.image && typeof doctor.image === "string" && (
            <div className="col-12 mb-3">
              <img
                src={doctor.image}
                alt="Doctor"
                width="150"
                className="img-thumbnail"
              />
            </div>
          )}

          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Update Doctor
            </button>
          </div>

        </div>
      </form>
    </div>
  );
}

export default UpdateDoc;