import axios from 'axios'

export {
    InfoNewsList,
    InfoJobsList,
    InfoAskList,
    fetchList,
    Infonewsuser,
    Infoaskuser,
    Infojobsuser
}

const config = {
    baseURL: 'https://api.hnpwa.com/v0/'
}

async function InfoNewsList() {
    try {
        const res = await axios.get(`${config.baseURL}news/1.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function InfoJobsList() {
    try {
        const res = await axios.get(`${config.baseURL}jobs/1.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function InfoAskList() {
    try {
        const res = await axios.get(`${config.baseURL}ask/1.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function fetchList(pageName) {
    try {
        const res = await axios.get(`${config.baseURL}${pageName}/1.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function Infonewsuser(id) {
    try {
        const res = await axios.get(`${config.baseURL}user/${id}.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function Infoaskuser(id) {
    try {
        const res = await axios.get(`${config.baseURL}item/${id}.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

async function Infojobsuser(id) {
    try {
        const res = await axios.get(`${config.baseURL}item/${id}.json`)
        return res
    } catch (err) {
        console.log(err)
    }
}

