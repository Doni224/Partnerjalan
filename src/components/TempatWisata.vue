<template>
  <div>
    <div v-for="pkt in paket" :key="pkt.id">
      <img width="100px" :src="pathContact + pkt.pathgambar" alt="" />
      <h3> hayy
        {{ pkt.namapaket }}
        <span style="font-size: 14px">({{ pkt.kota.kota }})</span>
      </h3>
      <p>{{ pkt.hari }}</p>
      <ul>
        <li v-for="thotel in pkt.hotelrelasi" :key="thotel.id">
          {{ thotel.hotel.nama }}
        </li>
      </ul>
      <ul>
        <!-- <li v-for="tempatwisata in pkt.paketwisata" :key="tempatwisata.id">
          {{ tempatwisata.wisata.tempatwisata }}
        </li> -->
        <li v-for="thotel in pkt.paketwisata" :key="thotel.id">
          {{ thotel.wisata?.tempatwisata }}
        </li>
      </ul>
      <p>{{ pkt.harga }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      paket: [],
      paketwisata:[],
      pathContact: this.$pathApi,
    };
  },
  methods: {
    async load() {
      try {
        const paket = await axios.get(this.$pathApi + "api/dashboard/paket/", {
          headers: {
            'ngrok-skip-browser-warning': 1,
            Authorization:
              "Bearer " +
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI3ZjY1YmUyMi04YTU0LTRlODYtOTg1Yy00ZjQ2MjE4NjFjNDQiLCJpYXQiOjE2NjYzMjIxODIsImV4cCI6MTY2NjkyNjk4Mn0.GSxLggupn9SeAC7MK9pqmVOWc3okXZd0crpqc9yIabQ",
          },
        });

        this.paket = paket.data;
      } catch (e) {
        console.log(e);
      }
    },
    
  },
  mounted() {
    this.load();
  },
};
</script>

<style>
</style>