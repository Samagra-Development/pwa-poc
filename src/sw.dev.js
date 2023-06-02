const registerServiceWorker = () => {
    console.log(process.env.PUBLIC_URL)
    let PATH = `${process.env.PUBLIC_URL}/sw.js`


    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register(PATH).then((res) => {
            console.log("Service Worked Registered")
            console.log(res.scope)

        }).catch((err) => {
            console.log("Service Worker Error")
            console.log(err)
        })

    }
}


export default registerServiceWorker


