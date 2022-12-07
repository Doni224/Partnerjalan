<template>
  <div>
    <NavigationApp/>
    <div class="container-fluid fasilitass">
      <div class="container fasilitas">
        <br><br><br>
        <h2 data-aos="fade-up" data-aos-duration="1000">Fasilitas yang didapatkan</h2>
        <div class="row">
            <div class="col-md-4 gy-3">
                <div class="fasilitasCard"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="0">
                    <h3 class="fasilitasTitle">Fasilitas Tour</h3>
                    <FasilitasTour/>
                </div>
            </div>
            <div class="col-md-4 gy-3">
                <div class="fasilitasCard"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
                    <h3 class="fasilitasTitle" >Fasilitas Peserta</h3>
                    <FasilitasPeserta/>
                </div>
            </div>
            <div class="col-md-4 gy-3">
                <div class="fasilitasCard"  data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
                    <h3 class="fasilitasTitle">Bonus</h3>
                    <FasilitasBonus/>
                </div>
            </div>
        </div>
        <br><br>
      </div>
    </div>
    <FooterApp/>
  </div>
</template>

<script>
import FooterApp from "@/components/FooterApp.vue";
import FasilitasTour from '@/components/Fasilitas/FasilitasTour.vue';
import FasilitasPeserta from '@/components/Fasilitas/FasilitasPeserta.vue';
import FasilitasBonus from '@/components/Fasilitas/FasilitasBonus.vue';
import NavigationApp from "@/components/NavigationApp.vue";
export default{
  components:{
    FooterApp,
    FasilitasTour,
    FasilitasPeserta,
    FasilitasBonus,
    NavigationApp
}
}
</script>

<style>
    .fasilitass {
        background:#f5f6f8;
    }
    .fasilitas {
        min-height:72vh;
    }
    .fasilitas h2 {
        margin-bottom:42px;
        padding-top:42px;
        font-family: 'Lato',sans-serif;
        font-weight: bold;
    }
    .fasilitasTitle {
        color:#55C9D3;
        margin-bottom:14px;
    }
    .fasilitasCard {
        height:350px;
        padding:42px;
        background:#fff;
        border-radius:16px;

    }
</style>