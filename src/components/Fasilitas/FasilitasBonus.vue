<template>
    <div>
      <ol>
          <li v-for="bonus in fasilitasbonus" :key="bonus.id">{{bonus.bonus}}</li>
      </ol>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      data(){
      return{
        fasilitasbonus:[],
        pathBonus: this.$pathApi
      }
    },
    methods: {
      setBonus(data) {
        this.fasilitasbonus = data;
      },
    },
    name: "FasilitasBonus",
    props: ["bonus"],
    mounted() {
      axios
        .get(this.pathBonus + "api/user/fasilitasuser/bonus", {
          headers: {
            "Bypass-Tunnel-Reminder": 1
          }
        })
        .then((response) => this.setBonus(response.data))
        .catch((error) =>
          console.log("gagal :", error));
    },
  }
  </script>
  
  <style>
  
  </style>