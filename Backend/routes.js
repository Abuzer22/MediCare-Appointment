const express = require("express");
const router = express.Router();
const controller = require("./controller")
const upload = require("./uploadMiddleware");
const verifyToken = require("./authMiddleware");


router.post("/register", controller.registerPatient);
router.post("/login", controller.createLogin);

router.post("/appointment", controller.createAppointment);
router.get("/allappointment", controller.getAllAppointment);
router.get("/appointment/:email", controller.userAllAppointment)

// Doctor
router.post(
    "/addDoctor",
    upload.single("image"), // ✅ image field name frontend ke same
    controller.addDoctor
);
router.get("/getalldoctor", controller.getDoctors);
router.get("/getdoctorbyid/:id", controller.getDoctorById);
// router.put("/updatedoctor/:id", controller.updateDoctor);
router.put(
  "/updatedoctor/:id",
  upload.single("image"),
  controller.updateDoctor
);
router.delete("/deletedoctor/:id", controller.deleteDoctor);





// const {createLogin,registerPatient} =require("./controller");
// router.post("/register", registerPatient);
// router.post("/login",createLogin);

module.exports = router;