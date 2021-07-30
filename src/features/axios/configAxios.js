import axios from 'axios'

const ClienteAxios = axios.create({
  baseURL: 'https://staging.api.socioinfonavit.io/api/v1/'

})
ClienteAxios.interceptors.request.use(function (config) {
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers['Content-Type'] = 'application/json'
  config.headers.Accept = 'application/json'
  return config
}, function (err) {
  return Promise.reject(err)
})

export default ClienteAxios
