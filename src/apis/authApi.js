import axios from 'axios';

const login = (data) =>
  axios.post(`${process.env.REACT_APP_BASE_URL_API}/login-user`, {
    mixin_id: data.email,
    password: data.password
  });

export default {
  login
};
