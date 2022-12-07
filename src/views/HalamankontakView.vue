<template>
  <div class="halamanKontak">
    <NavigationApp />
      <div>
        <div class="kontakWrapper" style="padding-top:60px;">
          <div class="kontakHeader">
            <div class="card bg-dark text-white">
              <img src="../assets/img/img-kontak.png" class="card-img" alt="...">
              <div class="card-img-overlay" style="padding: 50px 20px 0px">
                <h2 class="card-title" data-aos="fade-up" data-aos-duration="1000" >Kontak Kami Melalui</h2>
                <p class="card-text" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Hubungi kami, jika ingin paket wisata <br /> secara custom 
                atau ada pertanyaan terkait layanan kami.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="kontakContent container">
          <div class="row">
            <div class="col-12 col-md-6 gy-4">
              <div class="col-md-6  sampul" >

                <div class="icon"> <h3 class="title-hubungi" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">Hubungi kami melalui</h3>
              <KontakUs/></div>
             </div>
              <!-- <KontakUs/> -->
            </div>
            <div class="col-12 col-md-6 gy-4">
              <div class="col-md-6 sampul ">
                <div class="icon"> 
              <MediaSosial/></div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="foter mt-4">
        <FooterApp />
      </div>
   
  </div>
</template>
  
  <script>
import FooterApp from "@/components/FooterApp.vue";
import NavigationApp from "@/components/NavigationApp.vue";
import KontakUs from "@/components/Kontak/KontakUs.vue"
import MediaSosial from "@/components/Kontak/MediaSosial.vue";
export default {
  components: {
    FooterApp,
    NavigationApp,
    KontakUs,
    MediaSosial
},
};
</script>
  
<style scoped>
  .halamanKontak {
    background-color:#f5f6f8;
  }
  .kontakBgWrapper {
    height:35vh;
    position:relative;
    overflow:hidden;
  }
  .card-img{
    height: 200px;
  }
  .card-title{
    font-family: 'Lato', sans-serif;
    
    font-weight: bold;
  }
  .kontakBg {
    position:absolute;
    width:100%;
    top:0;
    left:0;
  }
  .title-hubungi{
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 24px;
  }
  .sampul{
    background-color: #ffff;
    width: auto;
    border-radius: 10px;
    padding:42px 0;
    padding-left:14px;
  }
  .icon{
    padding: 20px 20px 0px ;
  }
</style>