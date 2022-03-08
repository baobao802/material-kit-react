import axios from 'axios';
import { useAsync } from './useAsync';

const useProvinces = () => {
  const { execute, status, value, error } = useAsync(fetchData, false);

  return { execute, status, value, error };
};

export default useProvinces;

const fetchData = async (depth) => {
  const res = await axios.get(`https://provinces.open-api.vn/api/?depth=${depth}`);
  return res.data;
};
