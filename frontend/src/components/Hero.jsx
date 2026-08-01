import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <h4>Welcome to Medicare Appointment</h4>

        <h1>
          Find Trusted Doctors &
          <span> Book Appointment</span>
          <br />
          Anytime, Anywhere
        </h1>

        <p>
          Book appointments with experienced doctors in just a few clicks.
          Choose your specialist, select your preferred date and time,
          and receive quality healthcare without waiting in long queues.
        </p>

        <div className="hero-btn">

          <button className="book-btn1">
            Book Appointment
          </button>

          <button className="doctor-btn">
            Find Doctors
          </button>

        </div>

        <div className="hero-info">

          <div>
            <h2>150+</h2>
            <p>Doctors</p>
          </div>

          <div>
            <h2>10K+</h2>
            <p>Patients</p>
          </div>

          <div>
            <h2>24/7</h2>
            <p>Support</p>
          </div>

        </div>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700"
          alt="Doctor"
        />

      </div>

    </section>
  );
}

export default Hero;