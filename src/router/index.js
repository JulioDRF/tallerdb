import Vue from 'vue'
import VueRouter from 'vue-router'

const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');
const Blog = () => import(/* webpackChunkName: "blog" */ '@/views/Blog.vue');
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
    path: '/blog',
    name: 'Blog',
    component: Blog
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
    path: '/project/:id',
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
  routes
})

export default router
