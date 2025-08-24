import axios from 'axios';
//axios is used to make HTTP requests, helps in simplifying the code for making API calls
const http = axios.create({
    baseURL: import.meta.env.VITE_MOCKAPI_URL,
    headers: { 'Content-Type': 'application/json' },
    timeout: 5000, // 5 seconds timeout
});
//interceptors are used in axios to handle requests and responses globally
http.interceptors.response.use(({ data }) => data);


export const api = {
  todos: {
    getAll(params = {}) {
      return http
        .get("todos", { params })
        .catch((error) => 
          error.response.status === 404 ?[] : Promise.reject(error)
        );
      return response.data;
    },


    create(data) {
        return http.post('todos', data);
    },

    update(id, data) {
      return http.put(`todos/${id}`, data);
    },

    delete(id) {
      return http.delete(`todos/${id}`)
    },
  },
};