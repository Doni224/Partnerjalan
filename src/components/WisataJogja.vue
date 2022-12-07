<template>
  <div>
    <NavigationApp />
    <div class="container-fluid paketDetail" style="padding:84px 0">
      <div class="container">
        <div class="paketDetailHeader">
          <div class="breadCrumb">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Home</a></li>
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Paket Wisata</a></li>
                <li class="breadcrumb-item active" aria-current="page" >Paket Wisata {{ paket.kota }}</li>
              </ol>
            </nav>
          </div>
          <div class="row paketDetailTitle">
            <div class="col-md-6">
              <h3>Paket Wisata {{ paket.kota }}</h3>
            </div>
            <div class="col-md-6 ">
              <div class="paketDetailSearchs">
                <!-- <div class="input-group mb-3">
                  <input
                    v-model="cari"
                    type="text"
                    class="form-control"
                    placeholder="Cari wisata anda"
                    aria-label="Cari"
                    aria-describedby="button-addon2"
                    @keyup="searchWisata1"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <b-icon-search></b-icon-search>
                    Cari
                  </button>
                </div> -->
              </div>
            </div>
          </div>
        </div>
        <div class="detail-pesanan">
          <div class="row">
            <!-- <div class="col-lg-2 col-md-4">
              <div class="filterPaket">
                <div class="filterdk bg-white p-4  mt-3 d-none d-md-block">
                  <div class="kategori">
                    <h6 class="fw-bolder">Kategori</h6>
                    <ul class="kategoriList list-unstyled">
                      <li class="mt-3 filterList">Semua</li>
                      <li class="mt-3 filterList">Paket 1 Hari</li>
                      <li class="mt-3 filterList">Paket 2 Hari</li>
                    </ul>
                  </div>

                  <div class="hasil">
                    <h6 class="mt-5 fw-bolder">Paket</h6>
                    <ul class="hasilList list-unstyled">
                      <li class="mt-3 filterList">5 Paket</li>
                      <li class="mt-3 filterList">10 Paket</li>
                      <li class="mt-3 filterList">20 Paket</li>
                      <li class="mt-3 filterList">30 Paket</li>
                    </ul>
                  </div>
                </div>
                <div class="filtermb d-block d-md-none">
                  <div class="row">
                    <div class="col-6 kategorimb">
                      <div class="filterOpt">
                        <span>Kategori</span>
                        <b-form-select class="filterOptions mt-2" v-model="selected" :options="kategoriOptions"></b-form-select>
                      </div>
                    </div>
                    <div class="col-6 hasilmb">
                      <div class="filterOpt">
                        <span>Tampilkan hasil</span>
                        <b-form-select class="filterOptions mt-2" v-model="selected" :options="hasilOptions"></b-form-select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
            <div class="col-lg-12 col-md-8">
              <div class="daftarPaket mt-3" v-for="paketwisata in paket.paket" :key="paketwisata.id">
                <div class="row">
                  <div class="col-lg-3 col-12">
                    <div class="paketImg">
                      <img
                        :src="pathPaket + paketwisata.pathgambar"
                        alt="paket"
                      />
                    </div>
                  </div>
                  <div class="col-lg-9 col-12 mt-lg-0 mt-3">
                    <h5>Paket Wisata {{ paketwisata.namapaket }}</h5>
                    <span style="color: #55c9d3">{{ paketwisata.hari }}</span>
                    <div class="mt-3 wisataList">
                      <span class="fw-bolder">Tempat Wisata</span>
                        <div class="row">
                          <div class="col-lg-8">
                            <ul class="mt-1 row " style="margin-left: -0.75em">
                              <li class="col-lg-6 col-12" v-for="twisata in paketwisata.paketwisata" :key="twisata.id">
                                {{ twisata.wisata.tempatwisata }}</li>
                            </ul>
                        </div>
                      </div>
                    </div>
                    <div class="harga pe-4" style="float:right">
                      <h5 style="color: #55c9d3">{{ paketwisata.harga }}</h5>
                        <b-button class="btn btn-primary"  style="float:right" 
                        :to="{ name: 'pesanan', params: { id: paketwisata.id } }">Pesan Paket</b-button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterApp/>
  </div>
</template>
<script>
import NavigationApp from "./NavigationApp.vue";
import FooterApp from "./FooterApp.vue";
import axios from "axios";
import router from "../router";
export default {
  components: { NavigationApp, FooterApp },
  data() {
      return {
        selected: null,
        
        id: 0,
        paket: [],
        pathPaket: this.$pathApi,
        cari:'',
      }
  },
  created() {
    this.id = this.$route.params.id;
  },
  methods: {
    navigate() {
      router.go(-1);
    },
  
    async load() {
      try {
        const loadpaket = await axios.get(
          this.$pathApi + "api/user/paketuser/kota/" + this.$route.params.id,
          {
            headers: {
               'ngrok-skip-browser-warning': 1
            },
          }
        )

        this.paket = loadpaket.data;
      } catch (e) {
        console.log(e);
      }
    },
  //   async searchWisata1() {
  //     try {
  //       const searchpaket = await axios.get(
  //         this.$pathApi + "api/user/halamanutama/terbaru"+ this.$route.params.id +this.cari,
  //         {
  //           headers: {
  //             "ngrok-skip-browser-warning": 1,
  //           },
  //         }
  //       );

  //       this.paket = searchpaket.data;
  //     }  catch (e) {
  //       console.log(e);
  //     }
    
  // },
  },
  mounted() {
    this.load();
  },
};
</script>
<style>
.paketDetail {
  background:#f5f6f8;
}
.detail-pesanan .daftarPaket {
  padding: 21px;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
}
.filterPaket .filterdk  {
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
}
.filterPaket .filterdk .filterList {
  cursor:pointer;
}
.filterPaket .filterdk .filterList:hover{
  background-color:#DBFCFF;
  border-radius:8px;
}
.detail-pesanan .paketImg {
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
}
.detail-pesanan .paketImg img {
  position: absolute;
  width:120%;
  height:100%;
}
.filterOpt {
  padding:14px;
  background: #fff;
  border-radius:8px;
  border:1px solid rgba(0, 0, 0, 0.15);
}
.filterOptions {
  width:100%;
  border-radius:16px;
  padding-right:16px;
  padding:8px;
}
@media screen and (max-width: 600px) {
  .detail-pesanan .paketImg img {
    width:100%;
  }
}
</style>