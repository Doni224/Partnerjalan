<template>
    <div>
      <ol>
          <li v-for="peserta in fasilitaspeserta" :key="peserta.id">{{peserta.fasilitaspeserta}}</li>
      </ol>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
      data(){
      return{
        fasilitaspeserta:[],
        pathPeserta: this.$pathApi
      }
    },
    methods: {
      setFasilitasPeserta(data) {
        this.fasilitaspeserta = data;
      },
    },
    name: "FasilitasPeserta",
    props: ["peserta"],
    mounted() {
      axios
        .get(this.pathPeserta + "api/user/fasilitasuser/peserta", {
          headers: {
             'ngrok-skip-browser-warning': 1
          }
        })
        .then((response) => this.setFasilitasPeserta(response.data))
        .catch((error) =>
          console.log("gagal :", error));
    },
  }
  </script>
  
  <style>
  
  </style>