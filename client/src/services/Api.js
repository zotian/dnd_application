/* eslint-disable */
import axios from 'axios'
// proxy on vue.config.js to target localhost
const url = '/api'

export default() => {
  return axios.create({
    baseURL: url,
    headers:{
      authorization: `Bearer ${localStorage.token}`
    }  
  })
};
