import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const Api = async (url, method, data) => {
    const body = await axios({
        url,
        method,
        data,
        withCredentials: true // withCredentials 설정 추가
    });
    return body;
};