<template>
  <div class="container-fluid" style="background-color: #f5f6f8;padding-top:21px;padding-bottom:42px;">
    

    <div class="container">
      <h2 class="col mt-5" >Paket wisata yang bisa kamu pilih</h2>
      <div class="row " style="margin-top:42px;" >
        <div class="col-lg-3 col-md-4 col-sm-6 col-12 listpaket paketWisatasemua"  v-for="wisata in wisataSemua" :key="wisata.id">
          <h3 class="paketWisata-text-semua">Paket Wisata <br />{{wisata.kota}}</h3>
          <button class="paketWisatasemua-btn btn btn-primary">
            <router-link class="nav-link" :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link></button>
          <div class="paketWisatasemua-bg"></div>
          <img
            class="paketWisatasemua-img"
            :src="pathKota + wisata.pathgambar"
            alt
          />
        </div>

      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
  return{
    wisataSemua:[],
      pathKota: this.$pathApi,
      search: '',
  }
},

methods: {
   setFoto(data) {
     this.wisataSemua = data;
   },
   },
   props: ["wisata"],
 mounted() {
     axios
       .get(this.pathKota + "api/dashboard/kota", {
         headers: {
           'ngrok-skip-browser-warning': 1
         }
      })
       .then((response) => this.setFoto(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },

  }
</script>
<style>

.paketWisatasemua {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  width:100%;
  height: 300px;
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
  width: 95%;
  position: absolute;
  border-radius: 10px;
  height: 95%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
</style>