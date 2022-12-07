<template>
  <div class="container whyus">
    <h2 class="title mb-4" data-aos="fade-up" data-aos-duration="1000">Kenapa Memilih Kami ?</h2>
    <div class="row">
      <div class="col-md-6">
        <img class="gbr" src="@/assets/img/kacamta.png" style="width:100%" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50"/>
      </div>
      <div class="col-md-6">
        <br>
        <div class="whycards">
          <p class="whydesc" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
            Kami siap mengantarkan kamu ke berbagai destinasi menarik di
            berbagai kota wisata terbaik di indonesia dan kami jamin kamu bakal
            dapat pengalaman yang terbaik deh.
          </p>
          <br/>
          <div class="row">
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/price.png" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"/>
                  </div>
                  <div class="col-12">
                    <p class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Range harga terbaik dan terjangkau</p>
                  </div>
                </div>
            </div>
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/home.png" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"/>
                  </div>
                  <div class="col-12">
                    <p class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Beragam akomodasi yang bisa di pilih</p>
                  </div>
                </div>
            </div>
            <div class="whycard col-4">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <img src="@/assets/img/Icons/place.png" alt="" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"/>
                  </div>
                  <div class="col-12">
                    <p class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">Tempat wisata favorit di indonesia</p>
                  </div>
                </div>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .whyus {
    padding-top:84px;
    padding-bottom:84px;
  }

  .whycards {
    padding:1em;
  }

  .whycard {
    width:33.33%;
    background:#fff;
  }

  .whycard p {
    margin-top:21px;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    font-weight: 400;
  }

</style>