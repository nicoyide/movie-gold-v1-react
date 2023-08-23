import axios from "axios";
import { getAuthToken } from "../components/util/auth";

const userRequest = axios.create({
    const :token = getAuthToken(),
    baseURL: 'http://localhost:8080',
    headers: { 'Content-Type': 'application/json','authorization': `Bearer ${token}`, },
    
})

export const login = (email,userAccount, userPassword) => {
    return userRequest.post("/api/user/login",
    JSON.stringify({
        email,
        userAccount,
        userPassword,})
        ).then((res) => res.data).catch((err)=>err.toString());
};