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

# React Context With useReducer

## Pengertian

    React context dengan useReducer digunakan jika menemukan state yang ingin diubah dengan pengubahan yang kompleks seperti menambah, menghapus, dan mengedit data. Dalam materi kali ini membahas cara mengombinasikan antara react context dengan reducer yang sebelumnnya sudah dibahas di materi redux.

## Contoh Implementasi dengan case membuat sebuah counter increment & decrement 

1. Membuat context terlebih dahulu
   
    ```Javascript
    export const CounterContext = createContext();
    ```
2. Membuat function reducer
   
   ```Javascript
    //membuat function reducer dengan parameter (state, action) action ==> aksi apa yang akan dilakukan
    function reducer(state, action){
        switch (action.type) {
            case INCREMENT :
                return {
                    count: state.count + 1
                } // membuat case action dengan nilai kembalian object
            case DECREMENT :
                return{
                    count : state.count - 1
                } // state.count untuk menginisialisasi state saat ini 
            default:
                return state;
            }
    } // digunakan untuk memanajement data / state
   ```
3. Membuat Component Counter
   
   ```Javascript
    import React, { useContext } from 'react'
    import { CounterContext } from './CounterProvider'

    function Counter() {
        const {state, increment, decrement} = useContext(CounterContext) //  menggunakan use Reducer 
        // mengimport state, action increment, decrement
        return (
            <div>
                <button onClick={increment}>+</button>
                <span>{state.count}</span>
                <button onClick={decrement}>-</button>
            </div>
        )
      }

    export default Counter
   ```

4. Membuat Function provider untuk Counter
   
   ```Javascript
    import React, {createContext, useReducer} from 'react'

    export const CounterContext = createContext()

    
    const INCREMENT = "INCREMENT"
    const DECREMENT = "DECREMENT"

    //step pertama membuat initial state sebagai state awal
    const initialState = {
        count : 0
    }

    function CounterProvider({children}) {
        //state diambil dari initial state
        //dispatch digunakan untuk mengambil aksi / action reducer yang akan digunakan (action increment dan decrement)
        const [state, dispatch] = useReducer(reducer, initialState) // useReducer menerima 2 argument yaitu (function reducer, initialState)

        //membuat action yang nanti akan digunakan
        const increment = () =>{
            dispatch({type : INCREMENT})
        } // increment ini akan menjalankan dispatch, membuat inisialisasi dispatch dengan type ( type akan digunakan dalam case untuk mengembalikan action sesuai type)

        const decrement = () =>{
            dispatch({type : DECREMENT})
        }
        return (
            <CounterContext.Provider value={{state, increment, decrement}}>
                {children}
            </CounterContext.Provider>
        )
    }

    export default CounterProvider
   ```

# React Testing (Jest & RTL)

## Pengertian

    Testing merupakan uji coba terhadap aplikasi yang telah dibuat apakah sudah sesuai dengan ekspektasi atau belum.

## Jenis Tipe Testing

1. Manual Testing
    Manual Testing merupakan testing yang dilakukan dengan melakukan pengecekan terhadap masing-masing fitur yang telah dibuat. Misalnya telah membuat fitur counter, di cek apakah fitur tersebut sudah jalan sesuai ekpektasi atau tidak, apakah masih ada bug ketika user mengklik tombol increment/decrement, dll.

2. Automation Testing
    Automation Testing merupakan testing yang dilakukan olah kode porgram yang telah kita buat, kode program tersebut nantinya akan mengecek tiap fitur yang telah dibuat. Terdapat 3 macam automation testing, diantaranya :

    * Unit testing = testing yang dilakukan pada bagian paling terkecil, seperti function.
    * Integration = testing yang dilakukan dengan mengintegrasikan menyambungkan dengan aplikasi / sistem lain, seperti database.
    * end to end = testing yang dilakukan terhadap software mulai dari awal sampai akhir. Testing ini merupakan testing yang membutuhkan banyak biaya karena bisa dibilang testing ini adalah testing yang kompleks / testing yang tidak bisa dilakukan oleh programmer sendiri, tidak seperti unit testing yang masih bisa dilakukan oleh programmer sendiri.

## Implementasi Testing Menggunakan Jest

1. Instalasi Jest

    ```Javascript
        npm install --save-dev jest
    ```
2. File App.js
   
   ```Javascript
        function sum(x,y) { //untuk melakukan penjumlahan
            return x + y
        }
    ```
3. Filesum.test.js
    ```Javascript
        const sum = require('./sum');

        test('sum 1 + 2 to equal 3', () => {
            expect(sum(1, 2)).toBe(3);
        });
    ```

4. Menambahkan dependensi di package.json

    ```Javascript
        {
        "scripts": {
            "test": "jest"
            }
        }
    ```
5. Running test

    ```Javascript
        npm test

        //hasil
        PASS  ./sum.test.js
        ✓ sum 1 + 2 to equal 3 (5ms)
    ```
## Implementasi Testing Menggunakan RTL

1. File Counter.js
    
    ```Javascript
        import React, { useState } from 'react'
        
        function Counter() { //Membuat komponen Counter
            const [count, setCount] = useState(0)
            return (
                <div>
                    <button onClick={() => setCount(count-1)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count+1)}>+</button>
                </div>
            )
        }
        export default Counter;
        
        
        //Counter.test.js
        import { fireEvent, render, screen } from '@testing-library/react';
        import Counter from './Counter';
        
        
        test("render counter", () => {
            render(<Counter/>) //untuk merender komponen Counter
            const decrementBtn = screen.getByText("-") //untuk mendapatkan text "-"
            const count = screen.getByText("0") //untuk mendapatkan text "0"
            const incrementBtn = screen.getByText("+") //untuk mendapatkan text "+"
            expect(decrementBtn).toBeInTheDocument() //untuk mengecek apakah "-" itu ada
            expect(count).toBeInTheDocument() //untuk mengecek apakah "0" itu ada
            expect(incrementBtn).toBeInTheDocument() //untuk mengecek apakah "+" itu ada
            })

        test('click increment button', () => { //function untuk melakukan testing
            render(<Counter/>)
            const incrementBtn = screen.getByText("+")
            const count = screen.getByText("0")
            expect(count.textContent).toBe("0")
            //untuk mengecek apakah ketika diklik "+" yang awalnya 0 akan bertambah jadi 1
            fireEvent.click(incrementBtn)
            expect(count.textContent).toBe("1")
        });
    ```

## TDD(Test Driven Development)

Dalam melakukan testing juga terdapat yang namanya TDD (Test Driven Development). Pada umumnya testing dilakukan setelah fitur selesai dibuat, proses ini terjadi pada development biasa. Sedangkan pada proses TDD, testing dilakukan lebih dulu sebelum membuat fitur. Dalam TDD, terdapat sebuah lifecycle diantaranya yaitu :

1. Red zone (Test Fails) = berisi sebuah ekspektasi (masih belum ada code program, hanya ekspektasi saja).
2. Green zone (Test Passess)= realasasi dari ekspektasi tersebut (proses pembuatan code program).
3. Blue zone (Refactor) = tahap efisiensi dari code program, seprti membuat codingan yang simple, mudah dimengerti, dan rapi. Intinya untuk membuat code yang telah dibuat sebelumnya agar lebih rapi & efisien.

Terimakasih
_14 November 2022 18.08  @lyalfya_