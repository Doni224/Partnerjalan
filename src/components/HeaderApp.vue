<template>
  <div>
    <HeroHeader/>

    <ContohWisata />
    <div style="margin-top:42px;">
      <PaketTerbaru/>
    </div>
    <div style="margin-top:42px;">
      <DaftarWisata/>
    </div>
    <div style="margin-top:42px;">
      <PartnertshipApp />
    </div>
    <WhyusApp />
    <TestimoniApp/>
    <div style="margin-top:42px;">
      <KontakApp :kontak="kontak"/>
    </div>
    <div class="foter mt-5">
      <FooterApp/>
    </div>
  </div>
</template>

<script>
import HeroHeader from "./HeroHeader.vue";
import WhyusApp from "./WhyusApp.vue";
import PartnertshipApp from "./PartnertshipApp.vue";
import ContohWisata from "./ContohWisata.vue";
import KontakApp from "./KontakApp.vue";
import FooterApp from "./FooterApp.vue";
import DaftarWisata from "./DaftarWisata.vue";
import PaketTerbaru from "./PaketTerbaru.vue";
import TestimoniApp from "./TestimoniApp.vue";


export default {
  name: "HeaderApp",
  components: { HeroHeader, WhyusApp, DaftarWisata, PartnertshipApp, ContohWisata, KontakApp, FooterApp, PaketTerbaru, TestimoniApp },
};
</script>

<style>

</style>
