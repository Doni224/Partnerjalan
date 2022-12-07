import http from "../http-common";

class UploadServices {

  uploadPesan(nama,nohp,email,tanggal) {
    let formDataPesan = new FormData();

    formDataPesan.append("namalengkap", nama);
    formDataPesan.append("notelp", nohp);
    formDataPesan.append("email", email);
    formDataPesan.append("datetime", tanggal);

    return http.post("api/user/pesanan/", formDataPesan, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    });
  }

}

export default new UploadServices();