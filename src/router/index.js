import Vue from 'vue'
import VueRouter from 'vue-router'

const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');
const Contact = () => import(/* webpackChunkName: "contact" */ '@/views/Contact.vue');
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home.vue');
const NotFound = () => import(/* webpackChunkName: "notFound" */ '@/views/NotFound.vue');
const Projects = () => import(/* webpackChunkName: "projects" */ '@/views/Projects.vue');
const Project = () => import(/* webpackChunkName: "project" */ '@/views/Project.vue');

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/project/:slug',
    name: 'project',
    component: Project
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/not-found',
    alias: '*',
    name: 'NotFound',
    component: NotFound
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
