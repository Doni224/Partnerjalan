<template>
  <div>
    <NavigationApp />
    <div class="container-fluid detailPemesanan" style="padding:84px 0">
      <div class="container">
        <div class="breadCrumb">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Home</a></li>
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Paket Wisata{{ semua.kota}}</a></li>
                <li class="breadcrumb-item"><a class="text-decoration-none" style="cursor: pointer;" v-on:click="navigate()">Paket Wisata {{ paket.kota.kota }}</a></li>
                <li class="breadcrumb-item active" aria-current="page" > {{ paket.namapaket }}</li>
              </ol>
            </nav>
          </div>
          <h3>Detail Pemesanan</h3>
        <div class="row gx-" style="margin-top:21px">
          <div class="detailPesananCard col-md-6">
            <div class="pesancard bg-white">
              <img
                class="rounded mx-auto d-block"
                :src="pathPaket + paket.pathgambar"
                        alt="paket" style="height:250px"
              />
              <br/>
              <div class="container">
                <div class="row">
                  <div class="col">
                    <h2>Paket Wisata {{paket.namapaket}}</h2>
                    <p>{{paket.hari}}</p>
                    <h4>{{paket.harga}}</h4>
                    <br/>
                    <div class="pesananTempatWisata">
                      <span class="fw-bolder">Tempat Wisata</span>
                      <div class="row">
                        <div class="col-lg-10">
                          <ul class="row mt-1" style="margin-left: -0.75em">
                            <li class="col-lg-6 col-12" v-for="list in paket.paketwisata" :key="list.id">{{list.wisata.tempatwisata}}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-------- Isi From --------->
          
          <div class="detailPesananCard col-md-6 mt-3 mt-md-0">
            <div class="pesancard  bg-white">
              <h3>Silahkan isi form reservasi untuk memesan paket wisata</h3>
              <br/>
              <form  @submit.prevent="add">
                <div class="mb-3">

                  <input
                  v-model="form.paketid"
                    type="hidden"
                    class="form-control"
                    required
                  />
                  <input
                  v-model="paket.namapaket"
                    type="hidden"
                    id="kirimPaket"
                    class="form-control"
                    required
                  />
                  <label for="exampleInputName">Nama Lengkap</label>
                  <input
                    v-model="form.namalengkap"
                    id="kirimNama"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPhone">No.Telp/WA</label>
                  <input
                    v-model="form.notelp"
                    id="kirimNomor" 
                    type="text"
                    class="form-control"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1">Email</label>
                  <input
                  v-model="form.email"
                  id="kirimEmail"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                    <label for="example-datepicker">Pilih Tanggal</label>
                    <input
                      v-model="form.datetime"
                      id="kirimTanggal"
                      type="date"
                      class="form-control"
                      required
                    />
                    <!-- <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"></b-form-datepicker> -->
                </div>
                <div class="d-flex justify-content-end">
                  <a class="send_form" href="javascript:void" title="Send to Whatsapp">
                    <b-button class="mt-3 ms-3" type="submit" variant="primary" block
                      >Pesan Paket
                    </b-button>
                  </a>
                </div>
                
              </form>
             
            </div>
          </div>
          <!-- <FromPemesanan/> -->
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
  import $ from "jquery";
// import FromPemesanan from "./FromPemesanan.vue";
  export default {
    components: { NavigationApp, FooterApp },
    data() {
        return {
          form: {
            paketid: this.$route.params.id,
            namalengkap: "",
            notelp: "",
            email: "",
            datetime: "",
          },
          id: 0,
          paket: [],
          semua: '',
          pathPaket: this.$pathApi,
          pathSemua: this.$pathApi
        }
    },
    created() {
      this.id = this.$route.params.id;
    },
    methods: {
      navigate() {
        router.go(-1);
      },
      async add() {
        try {
          await axios.post(this.$pathApi + "api/user/pesanan", this.form);
          alert("Pesan berhasil terkirim");
          this.form.namalengkap = "";
          this.form.notelp = "";
          this.form.email = "";
          this.form.datetime = "";
        } catch (e) {
          console.log(e);
        }
      },
      async load() {
        try {
          const loadpaket = await axios.get(
            this.$pathApi + "api/user/paketuser/paket/" + this.$route.params.id,
            {
              headers: {
                'ngrok-skip-browser-warning': 1
              },
            }
          );
  
          this.paket = loadpaket.data;
        } catch (e) {
          console.log(e);
        }
      },
    },
    mounted() {
      this.load();
    },
  };
  $(document).on("click", ".send_form", function () {
  var input_blanter = document.getElementById("kirimEmail");

  var walink = "https://web.whatsapp.com/send",
    phone = "6287825057505",
    walink2 = "Halo saya ingin melakukan pemesanan paket wisata",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Send.";

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    walink = "whatsapp://send";
  }

  if ("" != input_blanter.value) {
    var inputNama = $("#kirimNama").val(),
      inputEmail = $("#kirimEmail").val(),
      inputNomor = $("#kirimNomor").val(),
      inputTanggal = $("#kirimTanggal").val(),
      inputPaket = $("#kirimPaket").val();

    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*Nama Paket* : " +
      inputPaket +
      "%0A" +
      "*Nama Lengkap* : " +
      inputNama +
      "%0A" +
      "*Alamat Email* : " +
      inputEmail +
      "%0A" +
      "*Nomor Telepon* : " +
      inputNomor +
      "%0A" +
      "*Tanggal Berangkat* : " +
      inputTanggal +
      "%0A";

    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML =
      '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML =
      '<span class="no">' + text_no + "</span>";
  }
});
  </script>
<style scoped>
.detailPemesanan {
  background: #f5f6f8;
  height: auto;
}

.detailPesananCard {
  border-radius:16px;
}
.pesancard {
  padding:42px;
  border-radius:16px;
}
.pesancard img {
  width:100%;
}

.pesancard p {
  color: #55c9d3;
}
@media only screen and (max-width: 768px) {
  .pesancard {
    padding:21px;
  }
}
</style>