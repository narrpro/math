import {
    InfoNewsList,
    InfoJobsList,
    InfoAskList,
    Infonewsuser,
    Infoaskuser,
    Infojobsuser,
    fetchList
        } from '@/api/index.js'
export default {
    namespaced: true,
    state: {
        news: { },
        jobs: { },
        ask: { },
        newsusers: {},
        jobsusers: { },
        askusers: { },
        list: []

    },
    // getters:{
    //     fetchedNews(state){
    //         return state.news
    //     },
    //     fetchedJobs(state){
    //         return state.jobs
    //     },
    //     fetchedAsk(state){
    //         return state.ask
    //     },
    //     ItemNews(state){
    //         return state.newsusers
    //     },
    //     ItemJobs(state){
    //         return state.jobsusers
    //     },
    //     ItemAsk(state){
    //         return state.askusers
    //     },
    // },
    mutations: {
        Set_News(state, d) {
            state.news = d
        },
        Set_Jobs(state, d) {
            state.jobs = d
        },
        Set_Ask(state, d) {
            state.ask = d
        },
        Set_newsUser(state, d) {
            state.newsusers = d
        },
        Set_jobsUser(state, d) {
            state.jobsusers = d
        },
        Set_askUser(state, d) {
            state.askusers = d
        },
        Set_List(state, d) {
            state.list = d
        }
    },
    actions: {
        Fetch_News(context) {
            InfoNewsList()
                .then(res => {
                    context.commit('Set_News', res.data)
                    return res
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_Jobs(context) {
            InfoJobsList()
                .then(res => {
                    context.commit('Set_Jobs', res.data)
                    return res
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_Ask(context) {
            InfoAskList()
                .then(res => {
                    context.commit('Set_Ask', res.data)
                    return res
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_newsUser({ commit }, id) {
            Infonewsuser(id)
                .then(({ data }) => {
                    commit('Set_newsUser', data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_jobsUser({ commit }, id) {
            Infojobsuser(id)
                .then(({ data }) => {
                    commit('Set_jobsUser', data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_askUser({ commit }, id) {
            Infoaskuser(id)
                .then(({ data }) => {
                    commit('Set_askUser', data)
                })
                .catch(err => {
                    console.log(err)
                })
        },
        Fetch_List({ commit }, pageName) {
            fetchList(pageName)
                .then(({ data }) => {
                    commit('Set_List', data)
                })
                .catch(err => {
                    console.log(err)
                })
        },

    },
    getters: {},
    modules: {}
}