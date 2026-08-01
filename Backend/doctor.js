    const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    specialization: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      required: true,
    },

    experience: {
      type: Number,
      required: true,
    },

    consultationFee: {
      type: Number,
      required: true,
    },

    hospital: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    timing: {
      type: String,
      required: true,
    },

    available: {
      type: Boolean,
      default: true,
    },

    // Image filename/path
    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Doctor", doctorSchema);