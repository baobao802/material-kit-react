import axios from 'axios';
import { localStore } from '../utils/browser-store';

const registerShop = (data) =>
  axios.post(`${process.env.REACT_APP_BASE_URL_API}/register-salon`, {
    ...data,
    phone_number: data.phoneNumber,
    salon_name: data.salonName
  });

const getShops = async () => {
  const barberStorage = localStore.getItem('BABER-BOOKING');
  const accessToken = barberStorage?.user.access_token || '';
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/account/salon/`, {
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  });
  return res.data;
};

const getShopById = async (id) => {
  const res = await axios.get(`${process.env.REACT_APP_BASE_URL_API}/account/salon/${id}`);
  return res.data;
};

export default {
  registerShop,
  getShops,
  getShopById
};
