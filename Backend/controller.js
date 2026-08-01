const Patient = require("./patient");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")
const Appointment = require("./appointment");
const Doctor =require("./doctor");

// This is for Patient Register
exports.registerPatient = async (req, res) => {
    try {

        const { name, email, phone, password, gender, age } = req.body;

        const existingPatient = await Patient.findOne({ email });

        if (existingPatient) {
            return res.status(400).json({
                success: false,
                message: "Patient already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const patient = await Patient.create({  // const above wala Patient  (.patient.js)
            name,
            email,
            phone,
            password: hashedPassword,
            gender,
            age
        });
const token = jwt.sign(
            { id: patient._id, role: patient.role, name: patient.name },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        res.status(201).json({
            success: true,
            message: "Patient Registered Successfully",
            data: patient,
            token:token
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


// Now i create for Login

exports.createLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        const result = await Patient.findOne({ email });

        if (!result) {
            return res.status(400).json({ message: "This email does not exist" });
        }

        const isMatch = await bcrypt.compare(password, result.password)

        if (!isMatch) {
            return res.status(400).json({
                message: "Invalid Password"
            })
        }

        const token = jwt.sign(
            { id: result._id, role: result.role, name: result.name },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )

        res.status(200).json({
            message: "Login Successful",
            token: token,
            user: result
        })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({

            error: error.message
        })

    }

}

// Now i Here Create Appointment

exports.createAppointment = async (req, res) => {
    try {
        const { name, email,phone,age,gender, doctor, time, date, location } = req.body;

        // const existingUser = await Appointment.findOne({ email });

        // if (existingUser) {
        //     return res.status(400).json({
        //         message: "This is email id alreasy exists"
        //     })

        // }

        const newAppointment = new Appointment({
            name, email,phone,age,gender,doctor, time, date, location
        })

        await newAppointment.save();

        res.status(201).json({
            message: "Your Appointment created.",

        })

    }
    catch (error) {
        console.log(error.message)

        res.status(500).json({
            error: error.message
        })
    }
}

// Get All appointment list
exports.getAllAppointment = async (req, res) => {
    try {
        const allAppointment = await Appointment.find();
        res.json({
            message: "all appointment List",
            appointmentlist : allAppointment,
            appointmentcount: allAppointment.length
        })
    } catch (error) {
        console.log(error.message);
        res.josn({ message: error.message })
    }
}

// User Get all Appointment list

exports.userAllAppointment = async (req, res) => {
    try {
        const { email } = req.params;   // /appointments/:email
        console.log(email)

        const appointments = await Appointment.find({
            email: email
        });

        console.log(appointments)
        if (appointments.length === 0) {
            return res.status(404).json({
                message: "No appointments found."
            });
        }

        res.status(200).json({
            appointments
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Appointment Status 

// exports.updateAppointmentStatus = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { status } = req.body;

//         // Sirf ye 2 status allow honge
//         if (!["Accepted", "Rejected"].includes(status)) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Invalid status",
//             });
//         }

//         const appointment = await Appointment.findByIdAndUpdate(
//             id,
//             { status },
//             { new: true }
//         );

//         if (!appointment) {
//             return res.status(404).json({
//                 message: "Appointment not found",
//             });
//         }

//         return res.status(200).json({
//             message: `Appointment ${status.toLowerCase()} successfully`,
//             appointment,
//         });

//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };


// Add Doctor
exports.addDoctor = async (req, res) => {
    try {
        console.log("Body:", req.body);
        console.log("File:", req.file);

        const doctor = await Doctor.create({
            name: req.body.name,
            specialization: req.body.specialization,
            qualification: req.body.qualification,
            experience: req.body.experience,
            consultationFee: req.body.consultationFee,
            hospital: req.body.hospital,
            address: req.body.address,
            timing: req.body.timing,
            // image: req.file ? req.file.filename : "",
            image: req.file ? "uploads/" + req.file.filename : ""
        });

        res.status(201).json({
            success: true,
            message: "Doctor Added Successfully",
            doctor,
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

// Get All Doctors
exports.getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();

    res.status(200).json({
            message: "all Doctors List",
            doctorslist : doctors,
            doctorscount: doctors.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Doctor
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);

    res.status(200).json({
      success: true,
      doctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Doctor
exports.updateDoctor = async (req, res) => {
  console.log(req.body);
  console.log(req.file); 

  const updateData = {
    ...req.body,
  };

  if (req.file) {
    updateData.image = req.file.filename;
  }

  const doctor = await Doctor.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  );

  res.status(200).json({
    success: true,
    doctor,
  });
};

// Delete Doctor
exports.deleteDoctor = async (req, res) => {
  try {
    await Doctor.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Doctor Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

