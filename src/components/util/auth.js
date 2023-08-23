import Cookies from "universal-cookie";
const API_URL = '/api/user/login'; // Replace with your API endpoint

const cookies = new Cookies();

  export const setAuthToken = (token) => {
  cookies.set('token', token, 
  { path: '/',secure: true,sameSite :true}
  );
  console.log(cookies.get('token'));
  };

export const getAuthToken = () => {
  if (cookies.get('token')===undefined){
    return '';
  }
  return cookies.get('token');
};