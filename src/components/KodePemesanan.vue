<template>
  <div class="conta">
    <NavigationApp />
    <div class="container-fluid">
      <div class="pesan-dk">
        <div class="row">
          <div class="col-lg-6" style="padding: 100px 60px 0px">
            <div class="bungkuss">
              <h2 class="terbaru">Cek Pemesanan</h2>
              <p>
                Cek kode pemesanan dibawah untuk melihat detail pemesanan paket
                wisata yang sudah kamu pesan.
              </p>
            </div>
            <!-- <div class="input-group mb-3" style="width: 98%">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Cari partnert anda"
                aria-label="Cari"
                aria-describedby="button-addon2"
              />
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                @click="cariKode"
              >
                <b-icon-search></b-icon-search>
                Cari
              </button>
            </div> -->
           
            <div class="container" id="app" >
              <div class="row" >
                <div class="col-lg-12 bg-white" >
                  <div class="row">
                    <TiketPesan/>
                    <!-- <div class="col-md-4 p-3 ">
                      <img class="kode-img"
                        src="@/assets/img/logo-about.png"
                        alt=""
                       
                      />
                    </div>
                    <div class="col-md-6" style="padding: 10px 30px 0px">
                      <h3 class="nama-kode" >
                        Detail Pemesanan <br />
                        paket wisata kamu
                      </h3>
                      <br />
                      <div class="css-kode">
                        <p> 
                          Pilih Paket: <br />
                          {{kodePemesanan.namalengkap}}
                        </p>
                        <p>
                          namalengkap: <br />
                          {{kodePemesanan.namalengkap}}
                        </p>
                        <p>
                          No.telp/WA: <br />
                          {{kodePemesanan.notelp}}
                        </p>
                        <p>
                          Mulai Berangkat: <br />
                          {{kodePemesanan.datetime}}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-1">
                      <div class="css-kode" style="padding:15px 0px 0px" >
                        <p> {{kodePemesanan.code}}</p>
                      </div>
                    </div>
                    <div class="col-md">
                      <div class="css-kode" style="float:right; padding: 10px 10px 10px" >
                        <button type="button" class="btn btn-secondary btn-sm" @click="onClick">Download Pdf</button>
                      </div>
                    </div> -->
                   
                  </div>
                 
                </div>
              </div>
            </div>
            
          </div>
          
          <div class="col-lg-6">
            <div class="bungkuss">
              <img
                style="width: 100%"
                src="@/assets/img/testimoni/image 7.png"
                alt=""
              />
            </div>
          </div>
        </div>
       
      </div>

      <div class="pesan-mb">
        <div class="row">
          <div class="col-lg-6"></div>
          <div class="col-lg-6">
            <div class="bungkuss" style="z-index:100px;">
              <img
                style="width: 100%"
                src="@/assets/img/testimoni/image 7.png"
                alt=""
              />
            </div>
            <div class="container">
              <div class="row" style="padding: 10px 10px 0px">
                <div class="col-lg-5"  >
                  <div class="bungkuss">
                    <h2 class="terbaru">Cek Pemesanan</h2>
                    <p>
                      Cek kode pemesanan dibawah untuk melihat detail pemesanan
                      paket wisata yang sudah kamu pesan.
                    </p>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  v-model="search"
                  type="text"
                  class="form-control"
                  placeholder="Cari partnert anda"
                  aria-label="Cari"
                  aria-describedby="button-addon2"
                />
                <button
                  class="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  @click="cariKode"
                >
                  <b-icon-search></b-icon-search>
                  Cari
                </button>
                <div class="container mt-4" id="tuingwayah">
              <div class="row">
                <div class="col-sm-12 bg-white">
                  <div class="row pdf">
                    <div class="col-sm-4 p-3">
                      <img class="kode-img"
                        src="@/assets/img/logo-about.png"
                        alt=""
                        
                      />
                    </div>
                    <div class="col-sm-6" style="padding: 10px 50px 0px">
                      <h3 class="nama-kode" style="font-size:16px;">
                        Detail Pemesanan <br />
                        paket wisata kamu
                      </h3>
                      <br />
                      <div class="css-kode" >
                        <p > 
                          Paket Wisata: {{kodePemesanan.paket?.namapaket}}
                        </p>
                        <p>
                          Nama Lengkap: {{kodePemesanan.namalengkap}}
                        </p>
                        <p>
                          No.telp/WA: {{kodePemesanan.notelp}}
                        </p>
                        <p>
                          Mulai Berangkat: {{kodePemesanan.datetime}}
                        </p>
                      </div>
                    </div>
                    <div class="col-md-1" >
                      <p class="code" style="padding: 95px 40px 0px">
                      {{kodePemesanan.code}}</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
           
              </div>
            </div>
          </div>
          <div class="col-md">
                      <div class="css-kode" style="float:right; padding: 10px 10px 10px" >
                        <button type="button" class="btn btn-secondary btn-sm" @click="onClick">Download Pdf</button>
                      </div>
                    </div>
        </div>
       
      </div>
    
    </div>
    <FooterApp/>
  </div>
</template>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.11/vue.min.js">
</script>
<script>

import NavigationApp from "./NavigationApp.vue";
import FooterApp from "./FooterApp.vue";
import TiketPesan from "./Tiket/TiketPesan.vue"; 
import axios from 'axios';
import jsPDF from 'jspdf';
import html2cnvas from 'html2canvas';
export default {
  components: { NavigationApp, FooterApp, TiketPesan, },
  name: 'PDF',
  
  data(){
    return{
      search:'',
      kodePemesanan:[
        
      ],
      pathSemua:  this.$pathApi,
    };
  },
  props:["kode"],
  
  methods:{
    setFoto(data) {
      this.kodePemesanan = data;
    },
    onClick(){
      this.kodePemesanan
      window.html2cnvas = html2cnvas;
      var doc = new jsPDF("p","pt","a4");
      doc.html(document.querySelector("#tuingwayah"),{
        callback: function(pdf){
          pdf.save("pemesanan.pdf");
        }
      }) 
    },
    cariKode() {
      axios
      .get(this.pathSemua +"api/user/cekpesanan/"+this.search,{
      headers: {
        'ngrok-skip-browser-warning': 1
         }
      })
      .then((response) => this.setFoto(response.data))
      .catch((error) => console.log("gagal :", error));
    },
  },
};


</script>
<style scoped>
.pesan-mb {
  display: none;
}
.nama-kode {
  font-size: 23px;
  font-family: "Lato", sans-serif;
  font-weight: bold;
}
.conta{
  background-color: #f5f6f8;
}
.kode-img{
    width:168px;
  }
@media only screen and (max-width: 768px) {
  .pesan-dk {
    display: none;
  }
  .pesan-mb {
    display: block;
  }  .kode-img{
    width:150px;
  }
}
</style>