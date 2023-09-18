import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:9010';

export const Api = async (url, method, data) => {
    const body = await axios({
        url,
        method,
        data,
        withCredentials: true // withCredentials 설정 추가
    });
    return body;
};


export const apiNoToken = async (url, method, data) => {
    const body = await axios({
        url, method, data
    })
    return body.data
}

export const api = async (url, method, data) => {
    const token = localStorage.getItem('token')
    const body = await axios({
        url, method, data,
        headers: { "Authorization": `Bearer ${token}` }
    })
    return body.data
}

export const apipost = async (url, method, body) => {
    try {
        const { status, data } = await axios({
            method, url, data: body,
            headers: { 'Content-Type': 'application/json' }

        })
        return { body: data, status: "success" }
    } catch (error) {
        return { body: null, status: "error" }
    }
}


