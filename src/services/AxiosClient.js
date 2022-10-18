import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://3.208.167.33:8999',

  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default apiClient
