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

# React Router 6

## Pengertian

Jika kita ingin berganti dari satu halaman ke halaman yang lainnya dalam website diperlukan suatu proses routing. Perpindahan halaman tersebut diantaranya seperti dari halaman Home, ke halaman About/ Porto dan halaman-lainnya. Routing sendiri adalah proses pemetaan antara sebuah URL ke dalam sebuah halaman yang terdapat konten / UI (User Interface) sesuai dengan URL yang dituju. Untuk dapat membuat routing kita membutuhkan library  Library tersebut yaitu __"react-router-dom"__. Untuk dapat menggunakan reacr-router, terlebih dahulu kita harus mengimport BorwserRouter & Route yang nantinya tag tersebut akan dipakai sebagai pembungkus terluar.
```javascript
    import { BrowserRouter } from "react-router-dom";
    //browser router digunakan untuk membungkus App.jsx agar router dapat berjalan, Browser router diletakkan pada file main.js
    <BrowserRouter>
        <App/>
    </BrowserRouter>
```

```Javascript
    //tampilan code di App,jsx
    import { Routes, Route, Link } from "react-router-dom";
    
    <nav>
        <Routes>
            <Route>
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>    
            </Route>
        </Routes>
    </nav>
```

## Penggunaan

React-router secara garis besar hampir mirip dengan HTML biasanya hanya saja sedikit ada perbedaan dalam penerapannya.HTML ketika kita hendak menyisipkan link / file HTML untuk berpindah halaman kita menggunakan tag "anchor", sedangkan dalam react-router menggunakan tag 'Link'. Selain tag 'Link' untuk dapat berindah halaman, terdapat salah satu Hook yang bernama 'useNavigate()' yang sebenarnya juga sama seperti tag "Link" untuk berpindah halaman, namun 'useNavigat' lebih disarankan karena lebih kompatibel.

```Javascript
    //megimport useNavigate dari react-router-dom
    import {usenavigate} from 'react-router-dom'
    const Home = () => {
        const navigate = useNavigate(); //Mendeklarasikan useNavigate () menjadi sebuah variabel yang lebih mudah digunakan
        return (
            <>
                <h1 style={{color:"red"}}>Page</h1>
                <button onClick={()=>navigate("/about")}>About me</button> 
            </> // didalam navigate dapat diisi denfan path / path + id halaman yang akan dirujuk
         )
    };
  
export default Home;
```

Selain itu ada juga __outlet__ yang digunakan untuk memanggil anak-anak (halaman) dari induk(halaman). Misalnya kita punya sebuah halaman about yang di dalamnya ada halaman about teachers & about students.Halaman about teachers & students merupakan anak dan halaman about merupakan induknya.

```Javascript
    import { Outlet, Link } from "react-router-dom";
    const About = () => {
    return (
        <>
        <Outlet />
        <Link to={"student"}>About Student |</Link>
        <Link to={"teacher"}>About Teacher</Link>
        </>
    );
    };
    
    export default About;
```
Dengan menambahlan attribute index di dalam tag "Route" di file, halaman ini akan menjadi halaman pertama ditampilkan. 'Nested' route Ini adalah salah satu fitur paling kuat dari React Router sehingga Anda tidak perlu dipusingkan dengan kode tata letak yang rumit. Sebagian besar tata letak Anda digabungkan ke segmen URL dan React Router mencakup ini sepenuhnya. Route dapat bersarang di dalam satu sama lain, dan jalurnya juga akan bersarang (anak mewarisi induknya).

```javascript
    <Routes>
        //Halaman yang akan ditampilkan pertamakali
        <Route path="/" element={<Home />} />
        
            //route params (dapat digunakan untuk mengirim parameter dan membawa data untuk dirouting)
            <Route path="/detail/:id" element={<Detail />} />
            
            //penggunaan nested route
                <Route path="/about" element={<About />}> 
                <Route path="student" element={<AboutStudent />} />
                <Route path="teacher" element={<AboutTeacher />} />
                <Route index element={<AboutSchool/>} />
            </Route>
        
        // tambahkan path="*" untuk menampilkan halaman yg tidak ditemukan.ketika user mengakses path tertentu yang tidak terdaftar di routingan yang kita miliki*/
        <Route path="*" element={<NotFound/>} />
    </Routes>
```

# State Managemen Redux

## Pengertian 

Redux adalah sebuah aplikasi state management. State management adalah cara untuk memfasilitasi komunikasi dan berbagai data lintas komponen. Redux berfungsi untuk melakukan perubahan state yang dibutuhkan oleh setiap fungsional yang ada di suatu aplikasi. Tujuan redux untuk mengatasi props drilling (penggunaan dan pendeklarasian props yang berulang ulang). Untuk membuat perubahan tersebut, Redux memiliki tiga komponen utama yaitu store , reducer, dan action. <br>

## Langkah-langkah dalam menggunakan redux dalam react 


1. Installasi react redux

```javascript
    npm install redux react-redux
```

2. Membuat Store

```javascript
// membuat store sebagai wadah/ gudang dari state
    import { createStore } from 'redux'
    
    const store = createStore(keranjangReducer)
    export default store;
```
3. Membuat Reducer

```javascript
//direducer ini dia akan menerima initial state (state awal)
    const initialState = {
        totalKeranjang: 0,
    };
  
  function keranjangReducer(state = initialState, action) {
    console.log(action);
  
    switch (action.type) { 
      default:
        return state;
    }
  }; 
// fungsi diatas memiliki parameter state untuk initialstatenya dan action, kemudian terdapat swicth dan case untuk memilih action apa yang akan dilakukan,action disini akan mengubah data initialState.
  
  export default keranjangReducer;
//reducer ini yang nantinya akan dipanggil kembali ke store menjadi sebuah parameter
```
```javascript
// membuat store sebagai wadah/ gudang dari state
    import { createStore } from 'redux'
    import keranjangReducer from '../reducer/keranjangReducer'
    
    const store = createStore(keranjangReducer)
    export default store;
```

4. Membuat Provider (untuk membari tahu bahwa storenya sudah tersedia)

```javascript
    import { Provider } from 'react-redux';
    ReactDOM.createRoot(document.getElementById('root')).render(
        <Provider store={store}>
            <App />
        </Provider>
    );
```
5. Mengambil Data dari Store menggunakan useSelector()

```javascript
    import { useSelector } from 'react-redux'
    
    function Keranjang() {
        const {totalKeranjang} = useSelector(state => state)
        return (
            <div>
                <span>Keranjang</span>
                <span>{totalKeranjang}</span>
            </div>
        )
    }
    export default Keranjang;
```
6. Membuat sebuah action

```javascript
//membuat action( action == sebuah function yang memiliki return object yang memiliki properti type)
    export const INCREMENT_KERANJANG = "INCREMENT_KERANJANG"
    export const DECREMENT_KERANJANG = "DECREMENT_KERANJANG"
    export function incrementKeranjang() {
        return {
            type: INCREMENT_KERANJANG,
        }
    }
    export function decrementKeranjang() {
        return {
            type: DECREMENT_KERANJANG,
        }
    }
    
```
7. Ubah Data di Store menggunakan dispatch(action)

```javascript
//Mengimport useDispatch() untuk mengirim data kedalam reducer
    import React, { useState } from "react";
    import { useDispatch } from "react-redux";
// mengimport action yang telah dibuat ke component counter
    import {
        incrementKeranjang,
        decrementKeranjang,
    } from "../redux/action/keranjangAction";
    function Counter() {
        const dispatch = useDispatch();
        const [count, setCount] = useState(0);
        const increment = () => {
            dispatch(incrementKeranjang())
            setCount(count + 1);
        };
        const decrement = () => {
            dispatch({
            type: "DECREMENT_KERANJANG"
            })
            setCount(count - 1);
        };
        return (
            <>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </>
        );
}
export default Counter;
```
```javascript
//kode di App.jsx untuk menampilkan halaman keranjang
    import { useState } from 'react'
    import Keranjang from './components/Keranjang'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Keranjang />
    </div>
  )
}
export default App
```


