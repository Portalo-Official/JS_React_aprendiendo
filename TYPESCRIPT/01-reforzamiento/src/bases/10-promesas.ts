const myPromise = new Promise( (resolve, reject) => {

    setTimeout( () => {
        // resolve(100);
        reject('Mi amigo se perdio')
    }, 2000) // 2 segundos

});


myPromise.then((myMoney) => {
    console.log(`Tengo dinero ${myMoney}`);
    
})
.catch((reason)=>{
    console.log(reason);
    
})
.finally( () =>{
    console.log('Pues a seguir con mi vida');
    
});