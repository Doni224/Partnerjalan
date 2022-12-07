<template>
<div class="hero">
    <div class="bg">
      <div class="hero-bg-bg"></div>
      <img
        class="hero-bg"
        src="../assets/img/gbr-utama.png"
        alt="Background"
        width="50%"
      />
    </div>
    <div class="hero container">
      <div class="hero-dk">
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="d-flex heroku" >
              <div class="heroDesc">
                <h1 class="mb-4 hero-title" data-aos="fade-up" data-aos-duration="1000">
                  Wisata terbaik <br />
                  untuk pengalaman <br />
                  terbaik
                </h1>
                <p class="mb-4 subheading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  Yuk pilih wisata yang kamu inginkan dan <br />
                  rasakan perjalanan menyenangkan yang <br />
                  ga pernah kamu lupakan.
                </p>
                <a href="#app1" >
                  <b-button class="btn btn-md btn-primary mt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                      Mulai Sekarang
                  </b-button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="hero-mb">
        <div class="row mt-4">
          <div class="col-md-6">
            <div class="d-flex align-items-center mb-5" >
              <div class="heroDesc">
                <h2 class="mb-3 title" style="color:#fff" data-aos="fade-up" data-aos-duration="1000">
                  Wisata terbaik untuk <br />pengalaman yang terbaik.
                </h2>
                <p class="mb-4 heading" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="50">
                  Yuk pilih wisata yang kamu inginkan dan <br />
                  rasakan perjalanan menyenangkan yang <br />
                  ga pernah kamu lupakan.
                </p>
                <a href="#app1">
                  <b-button class="btn btn-md btn-primary mt-2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                      Mulai Sekarang
                  </b-button>
                </a>
                <router-link to="/KodePemesanan" class="ms-3">
                  <b-button class="btn btn-md btn-primary mt-2" style="background:#fff;color:#333" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                      Cek Pemesanan
                  </b-button>
                </router-link>
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
* {
    scroll-behavior: smooth;
}
.hero {
  height:100vh;
}
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -9999;
}
.hero-title {
  font-size: 48px;
  font-family: 'Lato',sans-serif;
  font-weight: bold;
  color: #333;
}
.hero-bg {
  position: relative;
  top: 0;
  left: 0;
  float: right;
  z-index: -9999;
}
.hero-mb {
  display: none;
}
.heroDesc {
  margin-top:84px;
}
.cta {
  position: relative;
  float: right;
  bottom: 85%;
  right: 2.5%;
}

.cta .btn {
  background: #7cb1a1;
  padding: 2rem;
  font-size: 18px;
  color: #fff;
  border: none;
}

.cta .btn:hover {
  background: #3e6f7c;
  color: #fff;
}
@media only screen and (max-width: 768px) {
  .hero-title {
    font-family: "Lato", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    line-height: 43px;
  }
  .subheading {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin-top: 40px;
  }
}

@media only screen and (max-width: 768px) {

  .hero-bg {
    top: 0;
    left: 0;
    z-index: -9999;
    width: 135%;
    height: 190%;
  }
  .hero-bg-bg {
    width:100%;
    height:70vh;
    background:rgba(0,0,0,0.5);
    position:absolute;
    top: 0;
    left: 0;
    z-index: -9998;
    width: 135%;
    height: 190%;
  }
  .hero-mb {
    display: block;
    margin-bottom: 85%;
  }
  .heroDesc {
  margin-top:60%;
  }
  .hero-dk {
    display: none;
  }
  .form-label {
    font-weight: bold;
    opacity: 0.7;
  }
  .title {
    color: #fff;
    font-size: 21px;
  }
  .heading {
    color: #fff;
    opacity:0.85;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
  }
}
</style>