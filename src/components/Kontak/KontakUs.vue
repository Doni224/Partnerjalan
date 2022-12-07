<template>
  <div>
    
    <div class=" kontak d-flex align-items-center" v-for="kontakus in kontakUs" :key="kontakus.id">
        <img :src="pathKontak + kontakus.path" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50"/>
        <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{{kontakus.contact}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
    return{
      kontakUs:[],
      pathKontak: this.$pathApi
    }
  },
  methods: {
    setKontakUs(data) {
      this.kontakUs = data;
    },
  },
  name: "KontakUs",
  props: ["kontakus"],
  mounted() {
    axios
      .get(this.pathKontak + "api/user/footer/contact", {
        headers: {
          "Bypass-Tunnel-Reminder": 1
        }
      })
      .then((response) => this.setKontakUs(response.data))
      .catch((error) =>
        console.log("gagal :", error));
  },
}
</script>

<style>
.kontak img{
  width: 42px;
  height: 42px;

}
.kontak p{
  margin-left: 10px;
  padding: 10px 0px 0px 0px;
}
</style>