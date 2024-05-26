import Vue from "vue";
import Router from "vue-router";

import PageHome from "@/components/PageHome/PageHome.vue";
import PageBlog from "@/components/PageTwo/PageBlog.vue";
import BLogDetails from "@/components/PageThree/PageBLogDetails.vue";
import StyleGuid from "@/components/PageFour/PageStyleGuid.vue";
import Projects from "@/components/PageProject2/PageProject.vue";
import ProjectDetails from "@/components/ProjectDetailsComponent/PageProjectDetails.vue";
import Page404 from "@/components/Page404Component/ErrorComponent.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/home",
            name: "home",
            component: PageHome,
        },
        {
            path: "/blog",
            name: "blog",
            component: PageBlog,
        },
        {
            path: "/blogdetails",
            name: "blogdetails",
            component: BLogDetails,
        },
        {
            path: "/styleguid",
            name: "styleguid",
            component: StyleGuid,
        },
        {
            path: "/projects",
            name: "projects",
            component: Projects,
        },
        {
            path: "/projectdetails",
            name: "projectdetails",
            component: ProjectDetails,
        },
        {
            path: "/404",
            name: "notfound",
            component: Page404,
        },
        {
            path: "*",
            redirect: "/404",
        },
    ],
});
