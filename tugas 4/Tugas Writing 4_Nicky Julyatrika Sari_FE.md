# ASYNC AWAIT DAN JAVASCRIPT FETCH

## Async Await

1. Pengertian
  
    Kata _async_ key memberi cara yang lebih sederhana untuk bekerja dengan kode berbasis janji asinkron. Menambahkan _async_ di awal fungsi menjadikannya fungsi _async_ :

```javascript
async function functionAsync(){

}
```

   2. Di dalam fungsi async,dapat menggunakan await key sebelum panggilan ke fungsi yang mengembalikan promise. Ini membuat kode menunggu  hingga promise diselesaikan, dimana nilai yang dipenuhi dari promise diperlakukan sebagai nilai pengembalian, atau nilai yang ditolak.

3. Contoh Async Await

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

4.  Contoh ketika kondisi false
  
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

5. Error Handling Async/Await
  
    Untuk menghandle error  Async/Await,dapat menggunakan try catch di dalam function yang telah dibuat, sehingga jika terjadi error kita dapat menangkap errornya dalam block catch.

## Fetch

1. Fetch API 
   
    Fetch API menyediakan antarmuka JavaScript untuk mengakses dan memanipulasi bagian protokol , seperti permintaan dan tanggapan. Ini juga menyediakan metode global fetch()yang menyediakan cara mudah dan logis untuk mengambil sumber daya secara asinkron di seluruh jaringan.

    Fungsionalitas semacam ini sebelumnya dicapai dengan menggunakan _XMLHttpRequest_ . Fetch memberikan alternatif yang lebih baik yang dapat dengan mudah digunakan oleh teknologi lain seperti Service Workers. Ambil juga menyediakan satu tempat logis untuk mendefinisikan konsep terkait HTTP lainnya seperti CORS dan ekstensi ke HTTP.

2. Spesifikasi fetch berbeda dari jQuery.ajax()beberapa cara penting berikut ini:

   a. Promise yang dikembalikan dari fetch() _tidak akan ditolak pada status kesalahan HTTP_ meskipun responsnya adalah HTTP 404 atau 500. Sebaliknya, segera setelah server merespons dengan header, promise akan diselesaikan secara normal (dengan _ok_ properti respons disetel ke false jika responsnya tidak dalam kisaran 200–299), dan itu hanya akan ditolak pada kegagalan jaringan atau jika ada yang menghalangi permintaan untuk diselesaikan.
  
    b. Kecuali fetch()dipanggil dengan credentialsopsi yang disetel ke include, fetch():  

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

