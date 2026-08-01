const mongoose = require("mongoose");

const appointmentSchmea = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone:{
        type : String,
        required : true
    },
    age: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    doctor: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },

    location: {
        type: String,
        // required: true
    },
    status: {
        type: String,
        enum: ["Pending", "Accepted", "Rejected"],
        default: "Pending",
    },
},
    { timestamps: true }
)

const Appointment = mongoose.model("Appointment", appointmentSchmea);

module.exports = Appointment;