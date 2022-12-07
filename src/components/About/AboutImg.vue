<template>
    <div>
        <div>
            <div class="row">
              <div class="col-12 gy-4" v-for="foto in fotoProfil" :key="foto.id">
                <div class="aboutImg" >
                  <img class="aboutimg" :src="pathProfil + foto.path" alt="about1" style="width:100%;height:300px">
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
      pathProfil: this.$pathApi
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
      .get(this.pathProfil + "api/user/about/foto", {
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