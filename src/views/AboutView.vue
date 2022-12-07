<template>
  <div class="aboutPage">
    <NavigationApp />
    <div class="container-fluid aboutWrapper" style="padding:84px 0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <div class="row gy-4">
              <div class="col-12">
                <div class="tentangKami bg-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                  <h2>Tentang Kami</h2>
                  <br/>
                  <TentangKami/>
                </div>
              </div>
              <div class="col-12">
                <div class="visiMisi bg-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  <h2>Visi dan Misi</h2>
                  <VisiMisi/>
                  <br/>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mt-5 mt-md-0">
            <div class="row">
              <div class="col-12">
                <div class="aboutLogo bg-white" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                  <div class="d-flex align-items-center" style="padding: 0px 20px 0px;">
                    <img src="../assets/img/logo-about.png" alt="logo" style="width:25%; ">
                    <h4 class="ms-2 fw-bolder">PartnerJalan</h4>
                  </div>
                </div>
              </div>
              <AboutImg data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterApp/>
  </div>

</template>
<script>
import NavigationApp from "@/components/NavigationApp.vue";
import TentangKami from "@/components/About/TentangKami.vue";
import VisiMisi from "@/components/About/VisiMisi.vue";
import AboutImg from "@/components/About/AboutImg.vue";
import FooterApp from "@/components/FooterApp.vue";

export default {
  components: {
    NavigationApp,
    TentangKami,
    VisiMisi,
    AboutImg,
    FooterApp
  },

};
</script>
<style>
  .aboutWrapper {
    background-color:#f5f6f8;
  }
  .tentangKami, .visiMisi, .aboutLogo {
    padding:42px;
    border-radius:16px;
  }
  .tentangKami h2{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
  }
  .visiMisi h2{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
  }
</style>

