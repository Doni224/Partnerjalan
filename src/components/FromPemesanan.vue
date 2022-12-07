<template>
  <div class="detailPesananCard col-md-6 mt-3 mt-md-0">
    <div class="pesancard bg-white">
      <h3>Silahkan isi form reservasi untuk memesan paket wisata</h3>
      <br />
      <form @submit.prevent="onCreatepost">
        <div class="mb-3">
          <input v-model="form.paketid" type="hidden" class="form-control" />
          <label for="exampleInputName">Nama Lengkap</label>
          <input id="kirimNama" v-model="form.namalengkap" type="text" class="form-control" required/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPhone">No.Telp/WA</label>
          <input id="kirimNomor" v-model="form.notelp" type="text" class="form-control" required/>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1">Email</label>
          <input id="kirimEmail" v-model="form.email" type="email" class="form-control" required/>
        </div>
        <div class="mb-3">
          <label for="example-datepicker">Pilih Tanggal</label>
          <input id="kirimTanggal" v-model="form.datetime" type="text" class="form-control" required/>
        </div>
        <div class="d-flex justify-content-end">
          <a class="send_form" href="javascript:void" type="submit" title="Send to Whatsapp">
            <b-button class="mt-3 ms-3" type="submit" variant="primary" block
              >Pesan Paket
            </b-button>
          </a>
        </div>
      </form>
      <div id="text-info"></div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
import axios from "axios";
// import router from '../router'
export default {
  data() {
    return {
      paketid: 1,
      namalengkap: "",
      notelp: "",
      email: "",
      datetime: "",
      pathPaket: this.$pathApi,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  async pesan() {
    try {
      await axios.post(this.$pathApi + "api/user/pesanan", this.form);

      this.form.paketid = "";
      this.form.namalengkap = "";
      this.form.notelp = "";
      this.form.email = "";
      this.form.datetime = "";
    } catch (e) {
      console.log(e);
    }
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
      inputTanggal = $("#kirimTanggal").val();

    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
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
<style>
.detailPesananCard {
  border-radius: 16px;
}
.pesancard {
  padding: 42px;
  border-radius: 16px;
}
.pesancard img {
  width: 100%;
}

.pesancard p {
  color: #55c9d3;
}
@media only screen and (max-width: 768px) {
  .pesancard {
    padding: 21px;
  }
}
</style>