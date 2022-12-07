<template>
  <div>
    <div class="akun" >
      <div class="col-md-5 col-12  kontak2" style="width:250px;">
        <h3 class="title-media" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Media sosial kami </h3>
        </div>
        <div class="row " >
          <div class="col-md-5 " v-for="media in medsos" :key="media.id">
            <div class="align-items-center d-flex kontakk">
              <img class="medsos" :src="path + media.pathicon" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50"/>
              <p  style="width:auto;" class="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{{ media.namamedsos }}</p>
            </div>
          </div> 
          </div>
         
      <!-- <div class=" col-12 kontak2">
        <div class="row d-flex">
          <div class=" col-12">
            <div class="col-sm-6 d-flex align-items-center kontakk">
            
             
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
export default {
  data() {
    return {
      medsos: [],
      path: this.$pathApi,
    };
  },
  methods: {
    setMedsos(data) {
      this.medsos = data;
    },
  },
  name: "MediaSosial",
  props: ["media"],
  mounted() {
    axios
      .get(this.path + "api/user/footer/medsos", {
        headers: {
           'ngrok-skip-browser-warning': 1
        },
      })
      .then((response) => this.setMedsos(response.data))
      .catch((error) => console.log("gagal :", error));
  },
};
</script>
  
  <style scoped>
.kontakk img {
  width: 42px;
  height: 42px;
}
.kontakk p{
  font-size: 18px;
}
.kontakk{
  padding: 10px 0px 0px 0px;
}
.title-media{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 24px;
  }
</style>