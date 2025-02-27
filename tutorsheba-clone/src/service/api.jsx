import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchTutors = () => axios.get(`${API_URL}/tutors`);
export const loginUser = (data) => axios.post(`${API_URL}/auth/login`, data);
export const signupUser = (data) => axios.post(`${API_URL}/auth/signup`, data);
