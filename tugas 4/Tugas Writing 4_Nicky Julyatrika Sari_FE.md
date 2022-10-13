# Async Await

Kata _async_ key memberi cara yang lebih sederhana untuk bekerja dengan kode berbasis janji asinkron. Menambahkan _async_ di awal fungsi menjadikannya fungsi _async_ :

```javascript
async function functionAsync(){

}
```

Di dalam fungsi async,dapat menggunakan await key sebelum panggilan ke fungsi yang mengembalikan promise. Ini membuat kode menunggu  hingga promise diselesaikan, dimana nilai yang dipenuhi dari promise diperlakukan sebagai nilai pengembalian, atau nilai yang ditolak.

```javascript
async function myAsync () {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 2000)
    });

    let result = await p;
    alert(result);
}

myAsync();
```