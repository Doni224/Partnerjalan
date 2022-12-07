<template>
  <div class="canti">
    <NavigationApp />
    <div class="container">
      <div class="row">
        <div class="col-sm" style="margin-top: 130px;">
          <h2 class="text-center loki" data-aos="fade-down" data-aos-duration="1000">Mau wisata kemana hari ini ?</h2>
          <div class="searchWisata">
            <div class="aki col" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="50">
              <div class="input-group mb-3">
                <input
                  type="text"
                  v-model="search"
                  class="form-control"
                  placeholder="Cari wisata anda"
                  aria-label="Cari"
                  aria-describedby="button-addon2 "
                />
                <span
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  @click="searchWisata"
                >
                  <b-icon-search></b-icon-search>
                  Cari
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid-dk " style="padding-bottom:84px">
        <div class="container">
            <div class="row">
        <div class="col mt-4">
            <h2 class="loki" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Paket wisata yang bisa kamu pilih</h2>
        </div>
      </div>
      <div class="row" >
        <!-- <div class="col-sm-3"  v-for="wisata in wisataSemua" :key="wisata.id">
            <div class="paketW-bg"></div>
            <img class="pake-img"
              :src="pathSemua + wisata.pathgambar"
              alt/>
              <h3 > Paket Wisata <br />{{ wisata.namapaket }} {{ wisata.kota }}</h3>
        </div> -->
        <div class="col-md-3 mt-4"  v-for="wisata in wisataSemua" :key="wisata.id" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="text-wisata" >
                <h3 class="wisata-text"> paket Wisata <br />{{wisata.namapaket}} {{ wisata.kota }}</h3>
                 <button class=" btn btn-primary wisata-buton">
              <router-link class="nav-link"  :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link>
            </button>
          <div class="paketW-bg"></div>
                <img class=" w-100" :src="pathSemua + wisata.pathgambar" alt=""> 
            </div>
        </div>
       
        <!-- <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div>
        <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div>
        <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div> -->
      </div>
        </div>
        
      </div>


      <!-- <div class="container-fluid-mb bg-primary">
        <div class="container">
            <div class="row">
        <div class="col">
            <h2>Paket wisata yang bisa kamu pilih</h2>
        </div>
      </div>
      <div class="row" >
        <div class="col-sm-3"  v-for="wisata in wisataSemua" :key="wisata.id">
            <div class="paketW-bg"></div>
            <img class="pake-img"
              :src="pathSemua + wisata.pathgambar"
              alt/>
              <h3 > Paket Wisata <br />{{ wisata.namapaket }} {{ wisata.kota }}</h3>
        </div>
        <div class="col-md-3 mt-4"  v-for="wisata in wisataSemua" :key="wisata.id">
            <div class="text-wisata" >
                <h3 class="wisata-text"> paket Wisata <br />{{wisata.namapaket}} {{ wisata.kota }}</h3>
                 <button class=" btn btn-primary wisata-text">
              <router-link class="nav-link"  :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link>
            </button>
          
                <img class=" w-100" :src="pathSemua + wisata.pathgambar" alt=""> 
            </div>
        </div>
       
        <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div>
        <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div>
        <div class="col-sm-3">
            <img src="@/assets/img/bali.png" alt="">
        </div>
      </div>
        </div>
        
      </div> -->
      <FooterApp/>
  </div>
</template>
<script>
import NavigationApp from "../components/NavigationApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import axios from 'axios'
export default {
  components: { NavigationApp, FooterApp },
  data() {
    return {
      wisataSemua:[],
      pathSemua: this.$pathApi,
      search: '',

    };
  },
  methods: {
    setFoto(data) {
      this.wisataSemua = data;
    },
    searchWisata() {
      axios
      .get(this.pathSemua +"api/user/paketuser/search/"+this.search,{
      headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
      .then((response) => this.setFoto(response.data))
      .catch((error) => console.log("gagal :", error));
  },
  },
  props: ["wisata"],
  mounted() {
     axios
       .get(this.pathSemua + "api/user/halamanutama/semua", {
         headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
       .then((response) => this.setFoto(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },
};

</script>
<style>

.paketW-bg {
  width: 100%;
  position: absolute;
  border-radius: 10px;
  height: 311px;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
  
}
.container-fluid-dk{
  background-color: #f5f6f8;
}
.text-wisata{
    position: relative;
    border-radius: 20px;
  overflow: hidden;
  height: 300px;
}
.w-100{
  height:100%;
}
.loki{
  font-family: 'Lato',sans-serif;
  font-weight: bold;
}
.wisata-buton{
  position: absolute;
  bottom: 0;
  z-index: 552;
  margin-left: 20px;
  margin-bottom: 40px;
}
.wisata-text{
    position: absolute;
    bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
 font-family:'Roboto',sans-serif;
  color: #ffffff;
}
@media only screen and (max-width: 966px){
.wisata-text{
  font-size: 16px;
}
}
@media only screen and (max-width: 768px){
.wisata-text{
  font-size: 24px;
}
}
/* .container-fluid-mb{
    display: none;
} */
/* @media only screen and (max-width: 576px) {
    .container-fluid-mb{
        display: block;
    }
    .container-fluid-dk{
        display: none;
    }
} */
</style>