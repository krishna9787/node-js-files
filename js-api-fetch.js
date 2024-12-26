const URL = "https://api.thecatapi.com/v1/images/earch";

const getResponse = async() => {
    // let response = await fetch(URL);
    // let data = await response.json();
    // console.log(data[0].url);
    await fetch(URL).then ((response) => {
        return response.json()
    })
    .then((data => {
        console.log(data[0].url)
    }))
    .catch((err) => {
        console.log(err)
    })
}

getResponse();