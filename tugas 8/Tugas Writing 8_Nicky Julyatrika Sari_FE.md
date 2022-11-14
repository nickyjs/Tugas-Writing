# React Context

    Dalam aplikasi React pada umumnya, data diteruskan dari atas ke bawah (Parent to child) melalui props, tetapi penggunaan seperti itu dapat menjadi rumit untuk jenis props tertentu (misalnya preferensi lokal, tema UI) yang dibutuhkan oleh banyak komponen dalam aplikasi. context menyediakan cara untuk berbagi nilai seperti ini di antara komponen tanpa harus secara eksplisit melewatkan prop melalui setiap level pohon.

## Pengertian 
  
  React Context adalah adalah pembaruan lebih lanjut dari react redux yang mana react context juga hadir untuk mengatasi permasalahan yang sama seperti react redux yaitu mengatasi props drilling (lempar-lemparan data dari parent ke child). React context digunakan untuk membuat data agar dapat diakses secara global.

## Penggunaan react context
  
1. Instalasi React Context

    ```Javascript
        npm install react-context --save
    ```
2. Menyediakan variabel untuk membuat contextnya

    ```Javascript
        import React, {createContext} from 'react'

        export const userContext = createContext()
    ```

1. Membuat provider di component parent

        
    ```Javascript
        import {useState} from 'react'

        function Provider({children}) {
        const [user, setUser] = useState({
                name : "Nicky Julya"
        })
        
        return (
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        )
        }
        export default Provider;
    ```

2. Dalam contoh ini UserProvider merupakan parent yang mempunyai child yaitu CountProvider & App.

    ```Javascript
        import React, { createContext, useState } from 'react'
        export const KeranjangCountContext = createContext()
            
        function CountProvider({children}) {
            const [KeranjangCount, setKeranjangCount] = useState(0)
            
        return (
            <CountContext.Provider value={{KeranjangCount, setKeranjangCount}}>
                {children}
            </CountContext.Provider>
            )
        }
        export default CountProvider;
    ```

1. Membuat App nya yang berisi komponen-komponen yang dibutuhkan. Di sini sebagai contoh saja saya panggil komponen Keranjang, ListProduct, & SummaryPembelian

    ```Javascript
        import { useContext } from "react";
        import Keranjang from "./components/Keranjang";
        import ListProduct from "./components/ListProduct";
        import SummaryPembelian from "./components/SummaryPembelian";import { UserContext } from "./Provider";
        function App() {
        const { user } = useContext(UserContext); //Untuk dapat mengakses data di userContext
        return (
            <div className="App">
                <Keranjang /><br/>
                <ListProduct />
                <SummaryPembelian />
                <h1>{user.name}</h1>
            </div>
            );
        }
        export default App;
    ```


        