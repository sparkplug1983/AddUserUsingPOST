
async function callAPI() {
    const catResponse = await axios.get('https://dog.ceo/api/breeds/image/random')
    if (catResponse.data) {
        console.log(catResponse.data)
    }
}
callAPI()


