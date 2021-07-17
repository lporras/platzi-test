import axios from 'axios';

export const getDataFromAPi = (url) => {
  return axios.get(url)
    .then(({ data }) => {
      return data;
    });
};