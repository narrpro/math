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
        // Fetch_News(context) {
        //    return InfoNewsList()
        //         .then(res => {
        //             context.commit('Set_News', res.data)
        //             return res
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        // Fetch_Jobs(context) {
        //     return   InfoJobsList()
        //         .then(res => {
        //             context.commit('Set_Jobs', res.data)
        //             return res
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        // Fetch_Ask(context) {
        //     return   InfoAskList()
        //         .then(res => {
        //             context.commit('Set_Ask', res.data)
        //             return res
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         })
        // },
        async Fetch_News(context) {
            const res = await InfoNewsList()
            context.commit('Set_News', res.data)
            return res
        },
        async Fetch_Jobs(context) {
            const res = await  InfoJobsList()
            context.commit('Set_Jobs', res.data)
            return res
        },
        async Fetch_Ask(context) {
            const res = await InfoAskList()
            context.commit('Set_Ask', res.data)
            return res
        },
        async Fetch_newsUser({ commit }, id) {
            const res = await Infonewsuser(id)
            commit('Set_newsUser', res.data)
            return res
        },
        async Fetch_jobsUser({ commit }, id) {
            const res = await Infojobsuser(id)
            commit('Set_jobsUser', res.data)
            return res
        },
        async Fetch_askUser({ commit }, id) {
            const res = await  Infoaskuser(id)
            commit('Set_askUser', res.data)
            return res
        },
        async Fetch_List({ commit }, pageName) {
            const res = await fetchList(pageName)
            commit('Set_List', res.data)
            return res
        },

    },
    getters: {},
    modules: {}
}