import { createRouter, createWebHistory } from 'vue-router';
import Main from "./components/Home.vue";
import Claim from "./components/Claim.vue";
import Features from "./components/Features.vue";
import Merch from "./components/Merch.vue";
import Why from "./components/Why.vue";
import Team from "./components/Team.vue";

const routes = [
    { path: '/', component: Main },
    { path: '/Claim', component: Claim },
    { path: '/Features', component: Features },
    { path: '/Merch', component: Merch },
    { path: '/Why', component: Why },
    { path: '/Team', component: Team },
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;