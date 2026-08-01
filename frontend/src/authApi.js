import axios from "axios";

const API = axios.create({
    baseURL : import.meta.env.VITE_API_URL

})
// TOKEN ATTACH 

API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if(token){
        config.headers.Authorization = token;
    }  
    return config;
})

//REGISTER

export const registerUser = (data) =>{
    return API.post("/register",data)
}

//LOGIN

export const loginUser = (data) =>{
    return API.post("/login",data)
}

// BOOK APPOINTMENT

export const appointment = (data) =>{
    return API.post("/appointment",data)
}

//ALL APPOINTMENT

export const allAppointment = () =>{
    return API.get("/allappointment")
}

// This is for add Doctor

export const addDoctor =(data)=>{
    return API.post("/adddoctor",data)
}
// This is for get all Doctor

export const getAllDoctor =()=>{
    return API.get("/getalldoctor")
}

export const getDoctorById = (id) => {
    return API.get(`/getdoctorbyid/${id}`);
};

export const updateDoc = (id, data) => {
  return API.put(`/updatedoctor/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteDoctorById = (id) => {
    return API.delete(`/deletedoctor/${id}`);
};