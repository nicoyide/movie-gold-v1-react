import axios from "axios";

const userRequest = axios.create({
  baseURL: 'http://localhost:8080',
  headers: { 'Content-Type': 'application/json' },
});

// The login function remains the same as you provided
export const login = (email, userAccount, userPassword) => {
  return userRequest.post("/api/user/login", {
    email,
    userAccount,
    userPassword,
  }).then((res) => res.data).catch((err) => err.toString());
};

// Export the userRequest instance as well
export default userRequest;
