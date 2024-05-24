import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        projects: [],
    },
    mutations: {
        SET_PROJECTS(state, projectList) {
            state.projects = projectList;
        },
    },
    actions: {
        dataF({ commit }) {
            setTimeout(() => {
                commit("SET_PROJECTS", [
                    {
                        image: "/images/ImageP1.svg",
                        addInfo: "Minimal Bedroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: true,
                    },
                    {
                        image: "/images/ImageP3.svg",
                        addInfo: "Minimal Bedroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                    {
                        image: "/images/ImageP5.svg",
                        addInfo: "Classic Minimal Bedroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: true,
                    },
                    {
                        image: "/images/ImageP7.svg",
                        addInfo: "Modern Bedroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                    {
                        image: "/images/ImageP2.svg",
                        addInfo: "Minimal Bedroom table",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                    {
                        image: "/images/ImageP4.svg",
                        addInfo: "System Table",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                    {
                        image: "/images/ImageP6.svg",
                        addInfo: "Modern Medroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                    {
                        image: "/images/ImageP8.svg",
                        addInfo: "Modern Medroom",
                        path: "Decor / Artchitecture",
                        tag: "Bedroom",
                        like: false,
                    },
                ]);
            }, 2000);
        },
    },

    getters: {
        projectsItem: (state) => state.projects,
    },
    modules: {},
});
