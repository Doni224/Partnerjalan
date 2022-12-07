<template>
  <div id="app" style="background-color: #f5f6f8;padding-top:42px;padding-bottom:42px;">
    <div class="con container">
      <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Paket Wisata yang bisa kamu pilih</h2>
      <br />
      <carousel  v-if="wisataSemua.length > 0"
        :items="1"
        :loop="true"
        :autoplay="true"
        :margin="30"
        :nav="false"
        :dots="true"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 1.5,
          },
          500: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        }"
      >
        <div class="carousell" v-for="wisata in wisataSemua" :key="wisata.id">
          <h3 class="carousel-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Paket Wisata <br />{{wisata.kota}}</h3>
          <button class="carousel-btn btn btn-primary" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <router-link class="nav-link" :to="{ name: 'paket', params: { id: wisata.id } }">Lihat Detail</router-link>
          </button>
          <div class="carousel-bg"></div>
          <img
            class="carousell-img"
            :src="pathSemua + wisata.pathgambar"
            alt
          />
        </div>

      </carousel>
    </div>
  </div>
</template>
  
  <script>
import carousel from "vue-owl-carousel";
import axios from 'axios'
export default {
  name: "DaftarWisata",
  components: {
    carousel,
  },
  data(){
  return{
    wisataSemua:[],
      pathSemua: this.$pathApi
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
       .get(this.pathSemua + "api/user/halamanutama/semua", {
         headers: {
          "Bypass-Tunnel-Reminder": 1
         }
      })
       .then((response) => this.setFoto(response.data))
       .catch((error) =>
         console.log("gagal :", error));
   },


};
</script>
  
  <style>


.carousell {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 300px;
}
.carousel-text {
  font-family: 'Roboto',sans-serif;
  position: absolute;
  bottom: 0;
  margin-bottom: 100px;
  margin-left: 20px;
  z-index: 551;
  color: #ffffff;
}
.carousel-btn {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-bottom: 40px;
}
.carousel-bg {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 100%;
  background: linear-gradient(transparent, #000000);
  opacity: 0.8;
  z-index: 550;
}
.carousell-img {
  height:100%;
}

</style>
  