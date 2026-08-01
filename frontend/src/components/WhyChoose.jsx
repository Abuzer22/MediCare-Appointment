import "./WhyChoose.css";

function WhyChoose() {
  return (
    <section className="why">

      <div className="why-left">

        <h4>Why Choose Medicare</h4>

        <h1>Your Health is Our Top</h1>
        <h1>Priority</h1>

        <p>
          We connect patients with highly qualified doctors and make
          healthcare simple, fast and accessible.
        </p>

        <div className="features">

          <div className="feature">
            <h3>✔ Experienced Doctors</h3>
            <p>Consult with certified specialists.</p>
          </div>

          <div className="feature">
            <h3>✔ Online Appointment</h3>
            <p>Book appointments anytime.</p>
          </div>

          <div className="feature">
            <h3>✔ Emergency Support</h3>
            <p>24×7 healthcare assistance.</p>
          </div>

          <div className="feature">
            <h3>✔ Affordable Treatment</h3>
            <p>Quality healthcare at affordable prices.</p>
          </div>

        </div>

      </div>

      <div className="why-right">

        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700"
          alt="Doctor"
        />

      </div>

    </section>
  );
}

export default WhyChoose;