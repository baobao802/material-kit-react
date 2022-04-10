import axios from 'axios';

const signup = (data) => axios.post(`${process.env.REACT_APP_BASE_URL_API}/register-salon`, data);

const login = (data) =>
  axios.post(`${process.env.REACT_APP_BASE_URL_API}/login-salon`, {
    mixin_id: data.email,
    password: data.password
  });

export default {
  signup,
  login
};
