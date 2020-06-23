import axios from 'axios'

const axiosConfig = () => {
    var user = JSON.parse(localStorage.getItem('currentUser'));
    axios.defaults.headers.common['Authorization'] = user 
    ? "bearer "+ user.token
    : null;
    return axios
}
export default axiosConfig;