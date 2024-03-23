const countriesAll = require('../Level2/countries_data.js')

//Use the countries information, in the data folder. Sort countries by name, by capital, by population
function countrySort(countries,sorter) {
    const countrySortArray = countries.map((country) => country[sorter])
    if(sorter === 'population'){
        countrySortArray.sort((a,b) => a - b)
    }
    else{
        countrySortArray.sort()
    }
    const sortedArray = []
    countries.forEach((country) => {
        if(country[sorter] === '' || country[sorter] === 0){
            sortedArray.unshift(country)
        }
        else {
            sortedArray[countrySortArray.indexOf(country[sorter])] = country
        }
    })
    return sortedArray
}
console.log(countrySort(countriesAll,'population'))

// Find the n most spoken languages
function mostSpokenLanguages(countries,num) {
    const langcount = {}
    countries.forEach((country) => {
        country.languages.forEach((language) => {
            langcount[language] = (langcount[language] || 0) + 1
        })
    })
    const langArray = Object.keys(langcount).map((language) => {
        return {
            language: language,
            count: langcount[language]
        }
    })
    // here the count is not unique to each element so we can't use previous question technique
    langArray.sort((a,b) => b.count - a.count)
    const reqArray = langArray.filter((lang,index) => index < num)
    return reqArray
}
console.log(mostSpokenLanguages(countriesAll,countriesAll.length))

//Use countries_data.js file create a function which create the ten most populated countries
function mostPopulatedCountries(countries,num) {
    const popCountryArray = countries.map(({name,population}) => {
        return {
            name: name, 
            population: population
        }
    })
    popCountryArray.sort((a,b) => b.population - a.population)
    const reqArray = popCountryArray.filter((country,index) => index < num)
    return reqArray
}
console.log(mostPopulatedCountries(countriesAll,10))

//Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.