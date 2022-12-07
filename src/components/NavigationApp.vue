<template>
   <div class="container-fluid bg-white navigation">
        <div class="container" >
            <div class="row" >
                <nav class="navbar navbar-expand-lg fixed-top">
                    <div class="container-fluid bg-white">
                        
                        <a class=""> <img style="width:155px; padding: 14px 0px 10px 10px;" src="@/assets/img/logo.png"></a>
                        <button style="width:56px; float:right;  " class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-bars"></i></button>              
                        <span class="navbar-text">      
                            <div class="collapse navbar-collapse bg-white "  style="float:rigth;" id="navbarText">
                                <ul class="navbar-nav  mb-4 mb-lg-0" >
                                    <li class="nav-item " >
                                        <router-link class="nav-link active " to="/">Home</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/PaketWisata">Paket Wisata</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/FasilitasView">Fasilitas</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/AboutView">Tentang Kami</router-link>
                                    </li>
                                    <li class="nav-item">
                                        <router-link class="nav-link" to="/HalamankontakView">Kontak</router-link>
                                    </li>
                                    <li class="nav-item btn">
                                        <b-row>
                                            <b-col lg="1" style="width:160px;">
                                                <b-button style="background-color: #55C9D3;border:1px solid #55C9D3;color:#fff" class="btncek" to="/KodePemesanan"
                                           size="sm">Cek Pemesanan
                                                </b-button>
                                            </b-col>
                                        </b-row>
                                    </li>                           
                                </ul>
                            </div>                    
                        </span>                  
                    </div>
                </nav>          
            </div>
        </div>
    </div>   
</template>
<script>
   
</script>
<style>


button.navbar-toggler{
       float:right;
    }
.navbar {
    background:#fff;
    height:60px;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,.1);
    z-index:9999;
}
.btncek {
    background:#55C9D3;
}
@media only screen and (max-width: 800px) {
   button.navbar-toggler{
        margin-left: 58%;
    }
}
@media only screen and (max-width: 450px) {
     button.navbar-toggler{
        margin-left: 110px;
      
       
    }
}
</style>