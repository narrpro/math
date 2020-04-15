import axios from 'axios'


const config = {
    baseURL: 'https://api.hnpwa.com/v0/'
}

function InfoNewsList() {
    return axios.get(`${config.baseURL}news/1.json`)
}

function InfoJobsList() {
    return axios.get(`${config.baseURL}jobs/1.json`)
}

function InfoAskList() {
    return axios.get(`${config.baseURL}ask/1.json`)
}

function fetchList(pageName) {
    return axios.get(`${config.baseURL}${pageName}/1.json`)
}

function Infonewsuser(id) {
    return axios.get(`${config.baseURL}user/${id}.json`)
}

function Infoaskuser(id) {
    return axios.get(`${config.baseURL}item/${id}.json`)
}
function Infojobsuser(id) {
    return axios.get(`${config.baseURL}item/${id}.json`)
}

export {
    InfoNewsList,
    InfoJobsList,
    InfoAskList,
    fetchList,
    Infonewsuser,
    Infoaskuser,
    Infojobsuser
}