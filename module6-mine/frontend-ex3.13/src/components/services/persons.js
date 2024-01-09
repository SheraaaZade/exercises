import axios from "axios";
const baseUrl = "http://localhost:3001/phonebook";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data.map(person => ({ ...person, id: person.id })));
};

const getOne = (id) => {
  const request = axios.get(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const create = async (newPerson) => {
  const response = await axios.post(`${baseUrl}`, newPerson);
  return response.data;
};

const update = (id, newPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, newPerson);
  return request.then((response) => response.data);
};

//si pas d'identifiant
// const remove = async (person) => {
//   const request = axios.delete(`${baseUrl}/${person.name}/${person.number}`);
//   return request.then((response) => response.data);
// };

  const remove = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  getOne,
  create,
  update,
  remove,
};
