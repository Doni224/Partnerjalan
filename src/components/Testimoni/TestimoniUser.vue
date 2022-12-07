<template>
    <div>
        <div>
            <div class="row">
              <div class="col-12 gy-4" v-for="foto in fotoTesti" :key="foto.id">
                <div class="aboutImg">
                  <img class="aboutimg" :src=" pathTesti + foto.path" alt="about1" style="width:100%">
                  <h3>{{foto.caption}}</h3>
                </div>
                
              </div>
            </div>
            
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
export default {
    data(){
    return{
      fotoTesti:[],
      pathTesti: "https://6ddd-114-110-23-154.ap.ngrok.io/"
    }
  },
  methods: {
    setFoto(data) {
      this.fotoTesti = data;
    },
  },
  name: "AboutImg",
  props: ["foto"],
  mounted() {
    axios
      .get("https://6ddd-114-110-23-154.ap.ngrok.io/api/user/testimoniuser", {
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
.aboutimg {
  border-radius:16px;
}
</style>