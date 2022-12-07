<template>
  <div>
    <ul style="margin-left: -0.75em">
        <li v-for="visi in visimisi" :key="visi.id" class="mt-3">{{visi.visimisi}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
    return{
      visimisi:[],
      pathVisi: this.$pathApi
    }
  },
  methods: {
    setVisiMisi(data) {
      this.visimisi = data;
    },
  },
  name: "VisiMisi",
  props: ["visi"],
  mounted() {
    axios
      .get(this.pathVisi + "api/user/about/visimisi", {
        headers: {
          "Bypass-Tunnel-Reminder": 1
        }
      })
      .then((response) => this.setVisiMisi(response.data))
      .catch((error) =>
        console.log("gagal :", error));
  },
}
</script>

<style>

</style>