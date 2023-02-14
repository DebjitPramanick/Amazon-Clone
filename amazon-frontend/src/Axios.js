import axios from 'axios'

const instance = axios.create({
    baseURL: "https://amazon-be-7evd.onrender.com"
})

export default instance
