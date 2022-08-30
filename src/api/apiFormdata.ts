import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: { 'Content-Type': `multipart/form-data` },
  timeout: 10000,
  withCredentials: false,
})

// Todo [+]: Add response/request Handlers

export default api
