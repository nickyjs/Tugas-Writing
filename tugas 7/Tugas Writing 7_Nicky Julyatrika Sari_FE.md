# PROP TYPES


## Pengertian PropTypes

Prop Types merupakan sebuah lib yang dapat membantu untukmemeriksa data props yang dikirim agar sesuai dengan ekspetasi. _Jika tidak sesuai , maka akan muncul pesan eror_

## Instal PropTypes

```Javascript
//Installasi PropTypes lewat terminal git bash/ terminal vs code
    npm install prop-types

//Import library dengan menuliskannya didalam component yang akan menggunakan props-type

    import PropTypes from 'prop-types'
```

## Penggunaan Prop Types

Prop Types digunakan ketika kita ingin mengirimkan data, namun tipe data yang dibutuhkan harus menggunakan tipe data tertentu. Misalnya kita ingin ingin mengirimkan data berupa number, tapi yang terkirim merupakan tipe data string.

kita menganggap bahwa kode sudah benar dan tidak ada pesan error, sehingga tidak memeriksa kembali hasil yang sudah ditampilkan.

    Props yang dikirim harus sesuai dengan tipe data yang dikirim

Contoh :

```Javascript
//membuat sebuah component, lalu mengimport PropTypes agar dapat digunakan

import PropTypes from "prop-types";

const Mhs = ({ name, age }) => {
  return (
    <>
      <h2>nama : {name}</h2>
      <h2>age : {age + 1}</h2>
    </>  
  );
};

Mhs.propTypes = {
  // type data string (ketika data yang dimasukkan tidak sesuai maka akan error)
  name: PropTypes.string,
  // type data number
  age: PropTypes.number,
};

export default Mhs;
```

```Javascript
// Tampilan code di App.jsx

import React from "react";
import MhsInfo from "./components/Mhs";

const App = () => {
  return (
    <>
      <h1>Prop Types</h1>
      <Mhs name={"Julya"} age={19} />
    </>
  );
};

export default App;
```