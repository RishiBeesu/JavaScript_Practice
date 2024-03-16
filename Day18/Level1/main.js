(async() => {
const countriesAPI = 'https://restcountries.com/v2/all'
// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const body = await response.json()
        return body
    }
    catch (err){
        return err
    }
}
console.log('fetching...')
let body = await fetchData()
const countryDet = body.map((data) => [data.name,data.capital,data.languages.map((language) => language.name),data.population,data.area])
console.log(countryDet)
})();


