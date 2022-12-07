<template>
  <div>
    <div class="navi" style="margin-bottom: 21px">
      <NavigationApp />
      <div class="continer" id="cari">
        <div class="row-mt-4">
          <div class="aku col" >
            <h2>Mau wisata kemana hari ini ?</h2>
          </div>
        </div>
        <div class="searchWisata">
          <div class="aki col">
            <div class="input-group mb-3" >
              <input
              type="text"
               v-model="search "
                class="form-control"
                placeholder="Cari wisata anda"
                aria-label="Cari"
                aria-describedby="button-addon2 "
                
              /> 
              <span 
                class="btn btn-outline-secondary "
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
    <div class="container-fluid"
      style="background-color: #f5f6f8; padding-top: 21px; padding-bottom: 42px">
      <div class="container">
        <h2 class="col mt-5 pilihmana">Paket wisata yang bisa kamu pilih</h2>
        <div class="row" style="margin-top: 42px">
          <div class="col-lg-3 col-md-4 col-sm-6 col-12 paketWisatasemua"
            v-for="wisata in wisataSemua" :key="wisata.id">
            <h3 class="paketWisata-text-semua">
              Paket Wisata <br />{{ wisata.namapaket }} {{ wisata.kota }}</h3>
            <button class="paketWisatasemua-btn btn btn-primary">
              <router-link class="nav-link"  :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link>
            </button>
            <div class="paketWisatasemua-bg"></div>
            <img class="paketWisatasemua-img"
              :src="pathSemua + wisata.pathgambar"
              alt/>
          </div>
          
        </div>
      </div>
    </div>
    <!-- <WterbaikApp /> -->
    <FooterApp />
  </div>
</template>
<script>
import NavigationApp from "@/components/NavigationApp.vue";
//import WterbaikApp from "../components/WterbaikApp.vue";
import FooterApp from "@/components/FooterApp.vue";
import axios from "axios";
export default {
  components: { NavigationApp,  FooterApp },
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
<style >
#cari {
  text-align: center;
}
.aku h2 {
  font-family: "Lato", sans-serif;
  font-weight: 700;
 
  color: #333333;
  margin-top: 126px;
}
.pilihmana{
  font-family: "Lato", sans-serif;
  font-weight: 700;
 
  color: #333333;
  margin-top: 126px;
}
.aku .tabel {
  width: 500px;
  justify-content: center;
}
.aki {
  width: 600px;
  margin: auto;
}
.searchWisata {
  margin-top: 21px;
}


.paketWisatasemua {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width:100%;
  height: 360px;
  margin: 20px 0px 20px;
}
.paketWisata-text-semua {
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.paketWisatasemua-btn {
  position: absolute;
  bottom: 0;
  z-index: 552;
  margin-left: 20px;
  margin-bottom: 40px;
}
.paketWisatasemua-img {
  width:100%;
  height: 95%;
  border-radius: 10px;
}
.paketWisatasemua-bg {
  width: 92%;
  position: absolute;
  border-radius: 10px;
  height: 95%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
@media only screen and (max-width: 576px) {
  .aku h2 {
    font-size: 14px;
  }
  .aki {
    width: 330px;
  }
/* .paketWisatasemua{
  margin: 0px 20px 0px;
  height: 300px;
}  

.paketWisatasemua-bg{
width:85%;
}
.paketWisatasemua-img {
  width:100%;
} */
}
</style>