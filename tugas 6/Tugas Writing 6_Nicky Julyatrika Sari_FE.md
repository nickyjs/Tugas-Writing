# INTRODUCTION REACT JS

## Pengertian React JS

React JS merupakan Framework view library Javascript untuk membuat tampilan(user interface) pada website.

## kelebihan React JS 
1. React JS is Fast
  
    React JS membuat aplikasi front-end menjadi lebih cepat walaupun harus menghandle berbagai data.

2. React JS is Modular
  
    React JS membagi 1 tampilan pada website menjadi komponen-komponen kecil. kita dapat menenrapkan konsep modular javascript pada React JS.

3. React JS is Scalable
  
    React JS dapat digunakan pada aplikasi berskala kecil hingga besar dan kompleks.

4. React JS is Popular
  
    Komunitas React JS di seluruh dunia sangat besar. Kebanyakan perusahaan teknologi pun sudah menggunakan React JS. Hal ini dapat mempermudah kita dalam mencari pekerjaan baik itu freelance/start up apabila kita menguasai React JS.

 ## Instalasi React JS

1. Menginstal Node JS
2. Menggunakan library React
   ```javascript
   // ketikan kode dibawah ini pada git bash
   npm create-react-app My-app

   // npm akan otomatis terinstall ketika kita sudah menginstall node js

   //ketika sudah berhasil terinstall ,maka akan ada teks 'Happy Hacking'
   ```
3. Running program pada git bash
   ```Javascript
   npm start
   ```
4. untuk membuka visual code editor(Visual studio),ketikan perintah
   ```Javascript
   code .
   ```
5. React JS siap digunakan

## Struktur Project React JS

Karena React JS membagi 1 tampilan pada website menjadi komponen komponen kecil, berikut tampilan project react js yang berhasil diinstal.

![React](struktur-react.png)

## Contoh Struktur kode dari 'App.js'

```Javascript
import './App.css';

function App() {
  return(
    <div>
      <h1 className='App'>hello world. I'am Julya</h1>
    </div>
  );
}

export default App;

```
Pada potongan kode diatas terdapat tah HTML 'h1'. Kok bisa padahal ekstensinya Javascript?

itu adalah JSX

    JSX adalah syntax Extension for javascript. JSX dikembangkan untuk digunakan pada React JS

Sebelum ditampilkan pada browser, JSX akan di compile terlebih dahulu menjadi javascript. Dengan JSX kita dapat menggunakan HTML didalam file extension Javascript(.js)

    Setiap JSX hanya bisa memiliki 1 parent element
    
contoh :

```Javascript
import './App.css';

function App() {
  return(
    // Gunakan tag element <div> sebagai sebagai parent dari element lain

    // <div> mengambil space pada web page

    <div> 
      <h1 className='App'>hello world. I'am Julya</h1>
    </div>
  );
}

export default App;

```
```Javascript
import './App.css';

function App() {
  return(
    // Gunakan tag element <> sebagai sebagai parent dari element lain jika tidak ingin ada space pada ui yang terisi
    <> 
      <h1 className='App'>hello world. I'am Julya</h1>
    </>
  );
}

export default App;
```

## Virtual DOM

React JS memiliki fitur Virtual DOM, Virtual DOM secara singkat nya adalah sebuah javascript object (virtual) yang 
merepresentasikan DOM sebenarnya (real DOM). karena virtual DOM ini adalah representasi dari real DOM maka 
virtual DOM adalah sebuah replikasi (copy) dari real DOM tersebut. Berbeda konsep dengan DOM, 
virtual DOM ini memiliki konsep yaitu setiap saat perubahan terjadi di state pada aplikasi kita maka akan membuat virtual DOM yang baru (cloning).

## Class & ClassName

    Pada JSX atribut class di tag element HTML harus menggunakan className. 

Contoh :
```Javascript
import './App.css';

function App() {
  return(
    <> 
      <h1 className='App'>hello world. I'am Julya</h1>
    </>
  );
}

export default App;

// output : hello world. I'am Julya
```

## Curly Braces/ {}

Kita bisa menggunakan syntax Javascript didalam element HTML dengan curly braces/{}.

Contoh :

```Javascript
import './App.css';

function App() {
  return(
    <> 
      <h1>{1 + 2}</h1>
    </>
  );
}

export default App;

// output : 3
```

    Element didalam tag h1 akan dianggap sebagai Javascript jika menggunakan curly braces/{}.

    Jika tidak menggunakan curly braces, maka akan dianggap sebagai file HTML

## Variabel pada JSX
 Untuk mengakses variabel yaitu menggunakan curly braces/ {}

 Contoh :

 ```Javascript
 import React from 'react'

 function MyName() {
    //deklarasi variabel
    const name = 'Julya'
    return (
        <div>
            <h1>{ name }</h1>
        </div>
    );
 };

export default MyName;

 // output : Julya
 ```

 ## Atribut pada JSX

 Untuk mengakses atribut yaitu menggunakan curly braces/ {}

 Contoh :

  ```Javascript
 import React from 'react'

 function MyName() {
    //deklarasi variabel
    const name = 'Julya'
    return (
        <div>
            <h1>{ name }</h1>
        </div>
    );
 };

export default MyName;
```

## Event di JSX

 Untuk mengakses event yaitu menggunakan curly braces/ {}

 Contoh :

```Javascript
import React from "react";

function Myname() {
  const name = 'Julya'
  const onClickFunction = () => {
    alert('you clicked');
  }

  return(
    <div> 
      <h1>{ name }</h1>
      onClick = {onClickFunction}
      
    </div>
  );
};

export default Myname;
```

## Conditional in JSX

## .map()

Salah satu fungsi map yaitu untuk menampilkan list data di react


# COMPONENT PADA REACT JS

## Pengertian Component

Component adalah salah satu core dari React JS. Component membagi UI dalam satuan satuan kecil. Artinya dalam satu page ada beberapa component yang bisa kita buat.

Component dibuat jika component tersebut bersifat reusable code. pada skala project, component dibuat apabila akan dibutuhkan pada section atau page lain. namun, untuk latihan dan masa belajar tidak masalah jika component yang kita buat belum digunakan pada section atau page lain.

## Membuat Component

Ada dua cara untuk membuat component yaitu :

1. menggunakan class
   
2. Menggunakan function(_Kebanyakan kasus dokumentasi resmi React JS merekomendasikan untuk menggunakan function_)


    Contoh :

    ```Javascript
    import './App.css';
    import MyComponent from './component';

    function App() {
        return (
            <>
                <MyComponent/>
            </>
        );
    }

    export default App;
    ```
   

   
        Nama Folder, File, dan Function component harus menggunakan huruf besar diawal dan kata selanjutnya

## Functional Component

Untuk dapat mendefinisikan komponen, langkah pertama yang harus kita lakukan adalah mengimpor Komponen Inti Teks React dan React Native, kemudian memulai komponen dengan sebuah fungsi yang diawali dengan huruf kapiital / capitalize.

Contoh : 

```javascript
    import React from 'react';
    import { Text } from 'react-native';
    const FunctHello = () => {}; //arrow function
```
Di dalam komponen FunctHello dikembalikan sebagai elemen react yang di dalamnya bisa kita isi dengan teks / tag-tag lain yang ingin ditampilkan di layar. Kemudian kita juga harus mengekspor komponen fungsi yang telah kita buat agar bisa diakses di komponen lain.
```javascript
const FunctHello = () => { //arrow function
    return <h1>Hello Wrold</h1>;
};
export default FunctHello;
```

## Statefull & Statless Component

1. Statefull Component 
   Artinya memilii state dan bisa mengirim state tersebut ke dalam component.

2. Stateless Component
   Artinya tidak memiliki state dan hanya memiliki props.

## State & Props

Props adalah singkatan dari Property. Pengertian mudahnya, props adalah data yang diaksihkan (pemberian data). Props umumnya digunakan untuk komunikasi data component dari parent komponent ke child component. Prop ini mirip seperti attribute jika dalam HTML, namun dalam pembuatannya jika dalam functional component maka prop ini adalah parameternya.

Contoh :

```Javascript   
    // Membuat functional component
    function Latar(props) {
        // Membaca component props
        let color = props.warnaLatar
    };
    // Render component dengan props
    <Latar warnaLatar ="blue" />
```

State adalah data private sebuah component atau bisa disebut bahwa state adalah data yang tinggal di component tersebut. Data ini hanya tersedia untuk component tersebut dan tidak bisa di akses dari component lain. Kesimpulannya State adalah sebuah object untuk menyimpan data pada React dan akan di render atau muat ulang ketika data mengalami perubahan.

State dan props adalah hal yang berhubungan dengan stateless & stateful component. state merupakan data lokal & props digunakan agar component memiliki data yang dinamis dari component lain. 

# Styling di React J

# Handling Events & Conditional Rendering

## Handling Events

Untuk dapat memberikan event dalam react, kita bisa memakai onClick, onChange, dan attribute-attribute lain seperti halnya yang kita gunakan di HTML JS biasanya. Ketika kita ingin menerapkan sebuah event handler kita tidak bisa memakai varaibel biasa sebagai penampung, seperti set nilai awal = 0 ketika melakukan counter.Kita dapat menerapkan sebuah event handler dengan data yang akan ditampilkan / dapat berubah kita harus menggunakan state. 

Contoh penerapannya dengan membuat tombol counter increment dan decrement : 

```javascript
    import { useState } from "react";
    
    
    function Counter () {
        const [count, setCount] = useState(0) // untuk menampung counternya
        const increment = () => {
            setCount(count + 1)   // fungsi untuk melakukan increment (ditambah 1)
        }
        const decrement = () => {
            setCount(count - 1) // fungsi untuk melakukan decrement (dikurang 1)
        }
    
        return (
            <>
                {/* diberi event click */}
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </>
        )
    }
export default Counter;
```

## Conditional Rendering 

Adalah sebuah kondisi ketika terjadi sebuah event seperti di klik atau event yang lain. Untuk penerapannya, kita bisa menggunakan if else & operator ternary seperti halnya kita di Javascript biasanya, tinngal bermain logicnya saja mau di beri pengondisian seperti apa. 
Berikut untuk contoh penerapannya dengan study case user harus login terlebih dahulu sebelum dapat melakukan counting pada case di atas :

```javascript
    import Counter from "./components/Counter";
    
    function App() {
        // untuk conditional renderingnya
        const [isLogin, setIsLogin] = useState(false);
        
        return (
            <div>
                <!--memunculkan button ketika belum login  -->
                {!isLogin && <button onClick={() => setIsLogin(true)}>Login</button>}
                <br />
                
               <!--jika sudah login, akan munculkan counternya -->
                {isLogin ? <Counter /> : <span>Silakan login dulu bang ...</span>}
            </div>
        );
    }
export default App;
```


# REACT JS HOOKS

## Pengertian Hooks

Hooks adalah fitur baru yang baru dikenalkan di React JS pada tahun 2018.Hooks digunakan untuk memumadhkan penggunaan functional components agar bisa menggunakan state dan lifecycle lainya.

Sebelumnya, state(setState) dan lifecycle(componenDidMount, componenDidUpdate) hanya bisa digunakan di class component, namun dengan hooks, kita bisa menggunakannya di functional component.

    Hooks yang sering digunakan adalah useState dan useEffect

## Ilustrasi Hooks

![hooks](hooks.png)

Penjelasan :
functional component akan melakukan 'hooks' terhadap hal-hal yang hanya ada di class agar bisa digunakan di functional components dengan mudah.

## Perbedaan Functional Component dengan Class Component

1. Functional Component(Menggunakan state)
   
     ```Javascript
    import { useState } from "react";

    function App() {
        const [nama, setNama] = useState("Julya);

        return <h1>{ nama }, Sedang belajar React JS</h1>
    }

    // output : Julya sedang belajar React JS

2. Class component(Menggunakan state hooks)

    ```Javascript
    class component extends React.Component {
        constructor(props) {
            Super(props);
            this.state = { nama : "Julya"};
        }

        render() {
             return <h1>{this.state.nama}, Sedang belajar React JS</h1>;
            }
    }

    // output : Julya sedang belajar React JS
    ```

    Dengan menggunakan functional component dan menggunakan hooks maka code akan terlihat lebih clean,pendek dan mudah dimengerti.

    Tim yang sudah mendevelop React merekomendasikan untuk mulai menggunakan hooks karena lebih mudah dimengerti.

## useState

Penggunaan useState sedikit berbeda dengan setState/state di class component, namun pengertian useState sendiri sama seperti dengan state biasa.

## Cara penggunaan useState hooks


```Javascript
   import { useState } from "react" //Import usestate dari react
   
   function APp(){
    const [nama, setNama] = useState("Julya"); //Menuliskan useState hooks
    
    return(
        <div className = "App">
            <h1>{ nama }, sedang belajar React JS</h1> 
            <button onClick = {setNama("NickyJulya")}> Update nama</button>
        </div>
        );
   };
    // output : Julya sedang belajar React JS
    // apabila button di klik maka akan berubah menjadi 'Nickyulya sedang belajar React JS'
   ```
## Update State
State bisa diubah menggunakan variabel kedua dari state hooks.

contoh:

```Javascript
    const [nama, setNama] = useState("Julya");
 ```

    Untuk mengubahnya kita tinggal menggunakan setNama

## Array dalam useState Hooks

Untuk menyimpan data dalam state kita bisa menggunakan array. 

    Untuk menandakan bahwa state tersebut array tinggal ditambahkan tanda [].

Contoh :

```Javascript
const [nama, setNama] = useState([]);
```
## Contoh Case Penggunaaan useState hooks


useState biasa digunakan jika kita ingin menyimpan data suatu form yang nantinya  akan di post ke API untuk diproses.

## useEffect hooks

useEffect merupakan hooks yang bisa digunakan untuk menggunakan lifecycle pada functional component dengan mudah.

## Cara penggunaan Useeffect

```Javascript
import { useEffect }  from "react" //meng-import useEffect

// penggunaan useEffect hooks sebelum dirender
useEffect(() => {
  console.log(telah terjadi perubahan")
}, [nama])
```
## Contoh Case Penggunaaan useeffect hooks

useEffect, biasanya akan digunakan saat membuat call API, karena API akan dipanggil saat komponen terbentuk, maka call API bisa dilakukan dalam useEffect.

## Infinity re-render

Re-render yang berlebihan / infinite render mungkin saja akan terjadi, kita bisa menambahkan [] / variabel yang berubah untuk menentukan bahwa useEffect hanya akan berjalan saat terjadi update pada variabel yangbagian bawah akhir

## Lifecycle Method
__Lifecycle (Siklus Hidup)__ adalah  aktifitas method yang dilakukan oleh React Native ketika aplikasi di jalankan. Tujuan lifecycle penting untuk dipelajari karena lifecycle mengatur semua aktifitas yang terjadi pada aplikasi yang kita buat. 
Jenis-jenis lifecycle pada react diantaranya : 

* Mount
  Sebuah siklus ketika aplikasi baru saja di buka atau pengertian mudahnya mount itu untuk memunculkan.
  
* Update
  Sebuah siklus ketika kita mengubah data yang telah di Mounting.

* Unmount
  Proses menghilangkan atau mendestroy komponen yang sebelumnya di definisikan.


Dalam lifecycle terdapat yang namanya useEffect(),berfungsi untuk memberi efek samping ketika proses lifecycle berlangsung. Ketika akan menggunakan useEffect, kita pasti akan membutuhkan useState sebagai penampung 
Berikut contoh penerapannya untuk menampilkan list digimon : 

```javascript
    function ListDigimon() {
    const [isLoading, setIsLoading] = useState(true);
    const [digimons, setDigimons] = useState([]);
    useEffect(() => { 
        axios("https://digimon-api.vercel.app/api/digimon") // Untuk melakukan fetching data digimon
        .then((res) => {
        setDigimons(res.data);
        setIsLoading(false);
        console.log(res.data);
        });
    }, []);
```

# Form

Penggunaan form di react sebenarnya sama saja dengan penggunaannya di HTML biasa. Namun ketika menghadapi banyak kasus, akan lebih mudah jika memiliki sebuah fungsi JavaScript yang menangani sebuah submisi dari sebuah form dan memiliki akses terhadap data yang dimasukkan pengguna ke dalam form. Seperti halnya elemen form seperti tag input, textarea & select, mereka punya state masing-masing & meng-update sesuai inputan user. Di react, state yang dapat berubah ini akan disimpan dalam property yaitu menggunakan setState().

Contoh : 

```javascript
    import { useState } from "react";
    import axios from "axios";

    const Form = () => { // Membuat fungsi bernama Form
    const [name, setName] = useState(""); // untuk menampung nama & untuk mengubahnya nanti
    const [address, setAddress] = useState(""); //  untuk menampung address & untuk mengubahnya nanti
    const [data, setData] = useState({}); // untuk menampung data & untuk menampilkannya nanti
    const handleSubmit = (e) => { // Membuat fungsi untuk menghandle submit
    e.preventDefault();
    
    axios // Untuk mengirimkan data yang isinya : name, address, program dari database
      .post("http://localhost:3000/student", { // local host disini merupakan api dummy yang dibuat untuk contoh dalam proses ini
        name,
        address,
      })
      .then(() => {
        setData({ name, address, program }); // Untuk menampilkan nama, address, program
        setName(""); // untuk mengosongkan form name ketika button submit  di klik
        setAddress(""); // untuk mengosongkan form address ketika button di klik
      })
      .catch((err) => {
        console.log(err);
      });
  };
    
    return ( 
    <>
        <form action="" onSubmit={handleSubmit}>  {/* Memanggil fungsi handleSubmit ketika button submit di klik */}
        <label htmlFor="name">Name</label> 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />  {/* Mengambil value inputan name user */}
        <label htmlFor="address">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} /> {/* Mengambil value inputan address user */}
        <button type="submit">Submit</button>
        </form>
        <br />
        <h2>Name: {data.name}</h2> {/* Menampilkan name hasil dari inputan */}
        <h2>Address: {data.address}</h2> {/* Menampilkan address hasil dari inputan */}
    </>
  );
};
```

Terimakasih

_31 Oktober 2022 11.35  @lyalfya_

