<template>
  <div class="mypartnership">
    <div class="container"  >
      <h2 class="title" data-aos="fade-up" data-aos-duration="1000">Partnership Kami</h2>

      <carousel  v-if="fotoProfil.length > 0"
        :items="1"
        :loop="true"
        :autoplay="true"
        :margin="20"
        :nav="false"
        :dots="false"
        :animateOut="fadeOut"
        :animateIn="fadeIn"
        :autoplayHoverPause="false"
        :responsive="{
          0: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1000: {
            items: 5,
          },
        }"
      > 
        <div class="patnerbox" v-for="foto in fotoProfil" :key="foto.id">
            <div class="card" style="padding:21px;border:none" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
              <div class="d-flex align-items-center" style="height:100px;">
                <img class="card-img-top" :src="pathPartnert + foto.path" alt="Snow" />
              </div>
            </div>
        </div>
      </carousel>
    </div>
  </div>
</template>
  
  <script>
import carousel from "vue-owl-carousel";

import axios from "axios";
export default {
  name: "DaftarWisata",
  components: {
    carousel,
  },
  data() {
    return {
      fotoProfil: [],
      pathPartnert: this.$pathApi,
    };
  },
  methods: {
    setFoto(data) {
      this.fotoProfil = data;
    },
  },
  props: ["foto"],
  mounted() {
    axios
      .get(this.pathPartnert + "api/user/partnership", {
        headers: {
         'ngrok-skip-browser-warning': 1
        },
      })
      .then((response) => this.setFoto(response.data))
      .catch((error) => console.log("gagal :", error));
  },
};
</script>
  
<style>

</style>
  