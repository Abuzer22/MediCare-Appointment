import "./Services.css";

function Services() {

  const services = [
    "General Physician",
    "Cardiology",
    "Dentistry",
    "Neurology",
    "Orthopedics",
    "Gynecology",
    "Dermatology",
    "Pediatrics"
  ];

  return (

    <section className="services">

      <h1>Our Medical Services</h1>

      <p>Choose the healthcare service you need.</p>

      <div className="service-grid">

        {services.map((service, index) => (

          <div className="service-card" key={index}>

            <h2>🩺</h2>

            <h3>{service}</h3>

            <p>
              Professional consultation by experienced doctors.
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Services;