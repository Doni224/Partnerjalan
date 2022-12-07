<template>
    <div>
        <div>
            <div class="row">
                
              <div class="" v-for="foto in fotoRekomen" :key="foto.id">
                <div class="aboutImg">
                  <img class="aboutimg d-flex" :src=" pathRekomen + foto.pathgambar" alt="about1" style="width:100%">
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
      fotoRekomen:[],
      pathRekomen: this.$pathApi
    }
  },
  methods: {
    setRekomen(data) {
      this.fotoRekomen = data;
    },
  },
  name: "WisataRekomend",
  props: ["foto"],
  mounted() {
    axios
      .get(this.pathRekomen + "api/user/halamanutama/recomen", {
        headers: {
         'ngrok-skip-browser-warning': 1
        }
      })
      .then((response) => this.setRekomen(response.data))
      .catch((error) =>
        console.log("gagal :", error));
  },
}
</script>

<style>
</style>