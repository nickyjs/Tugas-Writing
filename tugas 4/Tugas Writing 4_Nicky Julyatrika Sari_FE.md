# ASYNC AWAIT DAN JAVASCRIPT FETCH

## Async Await

* Pengertian
  
    Kata _async_ key memberi cara yang lebih sederhana untuk bekerja dengan kode berbasis janji asinkron. Menambahkan _async_ di awal fungsi menjadikannya fungsi _async_ :

```javascript
async function functionAsync(){

}
```

  * Di dalam fungsi async,dapat menggunakan await key sebelum panggilan ke fungsi yang mengembalikan promise. Ini membuat kode menunggu  hingga promise diselesaikan, dimana nilai yang dipenuhi dari promise diperlakukan sebagai nilai pengembalian, atau nilai yang ditolak.

* Contoh Async Await

```javascript
async function myAsync () {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 2000)
    });

    let result = await p;
    alert(result);
}

myAsync();
console.log(myAsync())

// outputnya
// alert Hello World
```

*   Contoh ketika kondisi false
  
```javascript
  async function myFunction(){
        try {
            let result = await myVar()
            console.log(result)
        }
        cath(error){
            console.log(error)
        }
    }
```

* Error Handling Async/Await
  
    Untuk menghandle error  Async/Await,dapat menggunakan try catch di dalam function yang telah dibuat, sehingga jika terjadi error kita dapat menangkap errornya dalam block catch.

## Fetch

* Fetch API 
   
    Fetch API menyediakan antarmuka JavaScript untuk mengakses dan memanipulasi bagian protokol , seperti permintaan dan tanggapan. Ini juga menyediakan metode global fetch()yang menyediakan cara mudah dan logis untuk mengambil sumber daya secara asinkron di seluruh jaringan.

    Fungsionalitas semacam ini sebelumnya dicapai dengan menggunakan _XMLHttpRequest_ . Fetch memberikan alternatif yang lebih baik yang dapat dengan mudah digunakan oleh teknologi lain seperti Service Workers. Ambil juga menyediakan satu tempat logis untuk mendefinisikan konsep terkait HTTP lainnya seperti CORS dan ekstensi ke HTTP.

   * Spesifikasi fetch berbeda dari jQuery.ajax()beberapa cara penting berikut ini:

     1. Promise yang dikembalikan dari fetch() _tidak akan ditolak pada status kesalahan HTTP_ meskipun responsnya adalah HTTP 404 atau 500. Sebaliknya, segera setelah server merespons dengan header, promise akan diselesaikan secara normal (dengan _ok_ properti respons disetel ke false jika responsnya tidak dalam kisaran 200–299), dan itu hanya akan ditolak pada kegagalan jaringan atau jika ada yang menghalangi permintaan untuk diselesaikan.
  
      1. Kecuali fetch()dipanggil dengan credentialsopsi yang disetel ke include, fetch():  

         * Tidak akan mengirim cookie dalam permintaan lintas-asal 
         * Tidak akan mengatur cookie apa pun yang dikirim kembali dalam respons lintas-asal 
         * Mulai Agustus 2018, kebijakan kredensial default diubah menjadi asal yang sama. Firefox juga dimodifikasi di versi 61.0b13)

* Contoh fetch sederhana
  
    ```javascript
    fetch('http://example.com/movies.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
     ```

    Kode diatas mengambil file JSON di seluruh jaringan dan mencetaknya ke _console_. Penggunaan paling sederhana dari fetch() mengambil satu argumen — jalur ke sumber daya yang ingin diambil — dan tidak secara langsung mengembalikan isi respons JSON tetapi sebaliknya mengembalikan promise yang diselesaikan dengan Response objek.

    Objek Response, pada gilirannya, tidak secara langsung berisi badan respons JSON yang sebenarnya tetapi merupakan representasi dari seluruh respons HTTP. Jadi, untuk mengekstrak konten isi JSON dari Response objek, disini menggunakan json() metode, yang mengembalikan promise kedua yang diselesaikan dengan hasil parsing teks isi respons sebagai JSON.

# GIT & GITHUB LANJUTAN

* Kolaborasi
   
    Dalam melakukan kolaborasi ini kita akan menggunakan fitur pull request untuk mengimplementasikan perubahan yang dilakukan ke dalam repositori asli. Pull request ini merupakan permintaan untuk menggabungkan (merge) kode yang telah dimodifikasi dengan repositori utama atau repositori lain. Proses pull request biasanya memungkinkan kita untuk mengelola hak akses bagi pengguna yang dapat menggabungkan kode (merge) dan menentukan pengguna yang dapat memberikan komentar. 
    
    Dengan mengatur hak akses terhadap suatu branch dapat membantu untuk memaksimalkan fitur pull request. Pull request sangat umum saat ini, karena digunakan oleh hampir setiap perusahaan dengan tim pengembang minimal 3 orang atau lebih. Terlebih pada berbagai proyek open-source yang sudah mainstream menggunakan metode pull request untuk manajemen kolaborasi sesama kontributor

* Langkah-langkah kolaborasi Team leader
   
   * Buat organization :
     1. Team lead membuat organization.
     2. Invite anggota tim dan jadikan owner.


   * Buat Repository di organization :
      1. Team leader buat repo untuk project yg akan di buat.
      2. Repository dibuat public, dan ceklis README.
      3. Buat branch bernama dev.


   * Mengecek pull request :
      1. Setiap ada pull request, team lead akan mengeceknya
      2. Jika pull request belum sesuai, bisa dikasih komen atau beri  kabar anggota yg melakukan pull request tersebut.
      3. Jika sudah sesuai, lakukan merge.


   * Aplikasi sudah selesai :
     1. Saat ini semua perubahan ada pada branch dev.
     2. Jika sekiranya sudah tidak ada update terbaru dari development, saatnya menggabungkan antara branch dev ke branch main.
     3. Lakukan pull request utk menggabungkan branch dev ke branc main

*  Langkah-langkah Kolaborasi Semua Anggota Team

    1. Masing-masing anggota lakukan git clone pada repository yg sudah dibuat (1x saja)
    2. Bagi tugas pada masing-masing anggota kelompok.
    3. Pindah ke branch dev git switch dev.
    4. Sebelum ngoding, lakukan git pull pada branch dev untuk update kode terbaru
    5. Anggota membuat branch dari dev git branch _[nama-branch]_ 
    6. Pindah ke dalam branch yg sudah dibuat git switch [nama-branch.
    7. Lakukan pengerjaan di dalam branch tersebut.
    8. Jika fitur sudah selesai, sebelum di push lakukan langkah no 3, 4, dan 6.
    9. Lalu git merge dev untuk menhindari conflict di github.
    10. Jika ada conflict, bereskan semuanya.
    11. Jika sudah aman, commit lalu git push origin _[nama-branch]_.
    12. Lakukan pull request untuk merge ke branch dev.
    13. Tunggu pull request di acc oleh team lead.
    14. Jika sudah, ulangi proses dari no 2.

# RESPONSIVE WEB DESIGN

* Pengertian
  
  Responsive Web Design adalah pendekatan yang menyarankan bahwa desain dan pengembangan harus merespons perilaku dan lingkungan pengguna /user berdasarkan ukuran layar, platform, dan orientasi.Responsive Web Design bertujuan membuat design website dapat diakses dalam device apapun. Dalam membuat aplikasi/website kita harus memikirkan pengguna/user dari aplikasi/website yang akan dibuat. Devise yang umum digunakan oleh user antara lain Laptop/PC, Smartphone, dan tablet.

* Dasar

1. Menentukan viewport di HTML ini akan memastikan bahwa situs yang yang dibuat tidak memiliki gulir horizontal(Situs akan terlihat, dan pengguna tidak perlu untuk memperbesar ponsel untuk melihat kontennya).
   
   ```HTML
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   ```
2. Sertakan Reset Browser
   
   Setiap browser merender konten sedikit berbeda. tidak hanya itu, beberapa orang masih menggunakan browser versi lama. Beberapa pengembang telah membuat stylesheet untuk mengatasi masalah ini. Yang paling banyak digunakan adalah Reset dan Normalize . Perbedaan antara keduanya adalah Reset sepenuhnya menghapus semua style, sementara Normalisasi mencoba menambahkan konsistensi pada style browser

   * Normalize

    ```HTML
    <link rel="stylesheet" href="css/normalize.min.css" />
    ```
3. Reset Border box
   
   Reset border box membuat padding konsisten dan mencegah frustration.

    ```Javascript
        html{
            box-sizing: border-box;
        }   
        *,
        *:before,
        *:after {
            box-sizing: inherit;
        }
    ```

4. jQuery
   
   ```HTML
   <script src="js/jquery.min.js"></script>
   ```

5. Media Query
   
   Media query digunakan untuk membuat beberapa style tergantung pada jenis device. media query untuk responsive web design umumnya hanya menggunakan dua jenis media query yaitu min-width dan max-width

   ```HTML
   @media screen and (min-width : your pixel){

   }
   @media screen and (max-width : your pixel){

   }
   ```

6. Breakpoints
   
   Breakpoints merupakan perubahan yang terjadi pada tampilan saat berganti device atau ukuran width. Umumnya breakpoint terjadi saat ukuran viewport membesar atau mengecil.


__Terimakasih__

_14 Oktober 2022 13.25_

