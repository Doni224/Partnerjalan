import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import HalamankontakView from '../views/HalamankontakView.vue'
import FasilitasView from '../views/FasilitasView.vue'
import  DaftarwisataView from '../views/DaftarwisataView'
import LoginApp from '../views/LoginApp.vue'
import Daftarwisata  from '../components/DaftarWisata.vue'
import WisataJogja from '../components/WisataJogja.vue'
import DetailPesanan from '../components/DetailPesanan.vue'
import KodePemesanan from '../components/KodePemesanan.vue'
import PaketWisata from '../views/PaketWisata.vue'
import TempatWisata from '../components/TempatWisata.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path : '/AboutView',
    name: 'AboutView',
    component: AboutView
  },
  {
    path : '/HalamankontakView',
    name: 'HalamankontakView',
    component: HalamankontakView
  },
  {
    path : '/FasilitasView',
    name: 'FasilitasView',
    component: FasilitasView
  },
  {
    path : '/DaftarwisataView',
    name: 'DaftarwisataView',
    component: DaftarwisataView
  },
  {
  path : '/PaketWisata',
  name: 'PaketWisata',
  component: PaketWisata
},
  {
    path : '/LoginApp',
    name: 'LoginApp',
    component: LoginApp
  },
  {
    path : '/Daftarwisata',
    name: 'Daftarwisata',
    component: Daftarwisata
  },
  {
    path : '/paket/:id',
    name: 'paket',
    component: WisataJogja
  },
  {
    path : '/pesanan/:id',
    name: 'pesanan',
    component: DetailPesanan
  },
  {
    path : '/KodePemesanan',
    name: 'KodePemesanan',
    component: KodePemesanan
  },
  {
    path : '/TempatWisata',
    name: 'TempatWisata',
    component: TempatWisata
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
