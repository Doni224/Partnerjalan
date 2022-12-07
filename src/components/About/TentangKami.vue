<template>
  <div>
    <div v-for="info in tentang" :key="info.id">
        <p style="font-size:16px;">{{info.tentangkami}}</p>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
    data(){
    return{
      tentang:[],
      pathTentang: this.$pathApi
    }
  },
  methods: {
    setTentang(data) {
      this.tentang = data;
    },
  },
  name: "TentangKami",
  props: ["info"],
  mounted() {
    axios
      .get(this.pathTentang + "api/user/about/tentangkami", {
        headers: {
          "Bypass-Tunnel-Reminder": 1
        }
      })
      .then((response) => this.setTentang(response.data))
      .catch((error) =>
        console.log("gagal :", error));
  },
}
</script>

<style>

</style>