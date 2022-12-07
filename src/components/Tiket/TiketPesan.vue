<template>
    <div class="conta">
        <div class="input-group mb-3" style="width: 100%">
              <input
                v-model="search"
                type="text"
                class="form-control"
                placeholder="Cek pesanan kamu disini"
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
            </div>
    <div class="container" id="downpdf" >
        
              <div class="row" >
                <div class="col-lg-12 bg-white" style="padding:42px;border-radius:8px" >
                  <div class="row">
                    <div class="col-md-2">
                      <img class="kode-img" src="@/assets/img/logo-about.png" style="width:100%"/>
                    </div>
                    <div class="col-md-8">
                      <div class="row">
                        <div class="col-10">
                          <h4 class="nama-kode">Detail Pemesanan paket wisata kamu</h4>
                        </div>
                        <div class="col-2">
                          <h5 class="nama-kode fw-bold" style="color:#55C9D3">{{kodePemesanan.code}}</h5>
                        </div>
                      </div>
       
                      <br />
                      <div class="css-kode">
                        <p><span style="font-size:16px;opacity:.7">Paket Wisata:</span> {{kodePemesanan.paket?.namapaket}}</p>
                        <p><span style="font-size:16px;opacity:.7">Nama Lengkap:</span> {{kodePemesanan.namalengkap}}</p>
                        <p><span style="font-size:16px;opacity:.7">No.telp/WA:</span> {{kodePemesanan.notelp}}</p>
                        <p><span style="font-size:16px;opacity:.7">Mulai Berangkat:</span> {{kodePemesanan.datetime}}</p>
                      </div>
                    </div>
                    
                  </div>
                  
                </div>
              </div>
            </div>
            <div class="col-md">
                      <div class="css-kode" style="float:right; padding: 10px 10px 10px" >
                        <button type="button" class="btn btn-danger btn-sm" @click="onClick">Download Pdf</button>
                      </div>
                    </div>
        </div>
</template>
<script>
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import axios from 'axios';
export default{
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
      window.html2canvas = html2canvas;
      var doc = new jsPDF("p","pt","a4");
      doc.html(document.querySelector("#downpdf"),{
        callback: function(pdf){
          pdf.save("pemesanan.pdf");
        }
      }) 
     
      
    },
    cariKode(){
        axios.get(this.pathSemua +"api/user/cekpesanan/"+this.search,{
      headers: {
        "Bypass-Tunnel-Reminder": 1
         }
      })
      .then((response) => this.setFoto(response.data))
      .catch((error) => console.log("gagal :", error));
    },
  }
}
</script>
<style scoped>

</style>