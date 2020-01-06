import axios from 'axios'

axios.defaults.withCredentials = true
const instance = axios.create({
  baseUrl: 'http://localhost:8000'
})
export default instance
