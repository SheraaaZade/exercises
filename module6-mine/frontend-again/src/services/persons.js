import axios from "axios";
const baseUrl = "http://localhost:3001/phonebook";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) =>
    response.data.map((person) => ({ ...person, id: person.id }))
  );
};

const getOne = (id) => {
  const req = axios.get(baseUrl);
  return req.then((res) => res.data.find((person) => person.id === id));
};

const update = (id, newPerson) => {
  const req = axios.put(`${baseUrl}/${id}`, newPerson);
  return req.then((res) => res.data);
};

export default {
  getAll,
  getOne,
  update,
};
