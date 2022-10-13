async function myAsync () {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello World!"), 2000)
    });

    let result = await p;
    alert(result);
}

myAsync();
console.log(myAsync());