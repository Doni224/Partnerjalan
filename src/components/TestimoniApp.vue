<template>
  <div class="testimoni">
    <div class="conku container">
      <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Apa yang pelanggan katakan tentang kami?</h2>
      <br />
      <carousel v-if="fotoTesti.length > 0"
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
          1200: {
            items: 3
          }
        }"
      >
      <div class="d-flex" v-for="foto in fotoTesti" :key="foto.id" >
        <div class="carouselku " >
          <h5 class="carousel-textku" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50"> 
             {{foto.caption}} 
          </h5>
          <div class="carousel-bglu "> 
            <a @click="modalShow = !modalShow">
              <img class="carousel-imgku" :src=" pathTesti + foto.path" alt="about1" >
            </a>
          </div>
          <div class="carousel-bgku"></div>
          <b-modal v-model="modalShow" class="mob"> 
            <img class="carousel-img2" :src=" pathTesti + foto.path" >
          </b-modal>
        </div>
      </div>
      </carousel>
    </div>
  </div>
</template>
  
  <script>
import carousel from "vue-owl-carousel";
//import TestimoniUser from "./Testimoni/TestimoniUser.vue";
 import axios from "axios"

export default {
  name: "DaftarWisata",
  components: {
    carousel,
  
    //TestimoniUser,
},
  data() {
    return {
      modalShow: false,
      modalShow1: false,
       fotoTesti:[],
       pathTesti: this.$pathApi
       
    };
  },
 methods: {
   setFoto(data) {
     this.fotoTesti = data;
   },
   },
   props: ["foto"],
 mounted() {
     axios
       .get(this.pathTesti + "api/user/testimoniuser", {
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

.testimoni {
  background-color: #f5f6f8;
  height: 450px;
  padding-top:42px;
  padding-bottom:42px;
 
}
.semangat{
  width: 400px;
  gap: 100px;
}
.carouselku {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 259px;
  width: 340px;
  
}
.carousel-textku {
  position: absolute;
  font-family: "Lato", sans-serif;
  font-style: normal;
  bottom: 0;
  margin-bottom: 10px;
  margin-left: 7px;
  z-index: 551;
  color: #ffffff;
  padding:1em;
}
.carousel-btn {
  position: absolute;
  bottom: 0;
  z-index: 9999;
  margin-left: 20px;
  margin-bottom: 40px;
}
.carousel-bglu {
  width: 100%;
  position: absolute;
}
.carousel-bgku {
  width: 100%;
  position: absolute;
  
  bottom: 0;
  height: 50%;
  background: linear-gradient(transparent, #000000);
  opacity: 80;
  z-index: 550;
  
}
.carousel-imgku {
  width: 900px;

}
.carousel-img2 {
  transform: scale(1.5);

  width: 350px;
  margin-left: 70px;
}
.mob {
  visibility: visible;
}
@media only screen and (max-width: 380px) {
  .carousel-img2 {
    transform: scale(1.5);
    height: 290px;
    width: 290px;
    margin-left: 7px;
  }
  
}
</style>
  