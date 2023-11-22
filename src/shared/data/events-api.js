import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://655745e2bd4bcef8b6125c2f.mockapi.io/api/event',
  // params: {
  //   _limit: 8,
  // },
});

export const searchEvents = async (q, _page = 1) => {
  const { data } = await instance.get('/', {
    params: {
      q,
      _page,
    },
  });
  return data;
};

export const getAllEvents = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const getEventById = async id => {
  const { data } = await instance.get(`/${id}`);
  return data;
};

export const addEvent = async eventData => {
  const { data } = await instance.post('/', eventData);
  return data;
};
