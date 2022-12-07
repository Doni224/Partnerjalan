<template>
    <div>
        <div>
            <div class="row">
              <div class="col-12 gy-4" v-for="foto in fotoProfil" :key="foto.id">
                <div class="aboutImg">
                  <img class="aboutimg" :src=" pathPartnert + foto.path" alt="about1" style="width:100%">
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
      fotoProfil:[],
      pathPartnert: "https://c3c8-114-110-23-154.ap.ngrok.io/"
    }
  },
  methods: {
    setFoto(data) {
      this.fotoProfil = data;
    },
  },
  name: "AboutImg",
  props: ["foto"],
  mounted() {
    axios
      .get("https://c3c8-114-110-23-154.ap.ngrok.io/api/user/partnership", {
        headers: {
          "Bypass-Tunnel-Reminder": 1
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