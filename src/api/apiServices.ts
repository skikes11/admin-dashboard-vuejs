import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 10000,
  withCredentials: false,
})

// Todo [+]: Add response/request Handlers

export default api
