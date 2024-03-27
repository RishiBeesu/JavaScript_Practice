const countries = require('./countries.js')

// How many languages are there in the countries object file.
function numOfLanguages(countries){
    let languages = []
    countries.forEach((country) => {
        languages = [...languages,...country.languages]
    })
    const languageSet = new Set(languages)
    return languageSet
}
console.log(numOfLanguages(countries).size)

// Use the countries data to find the 10 most spoken languages:
function mostSpokenLanguages(countries,length) {
    let languageCount = {}
    countries.forEach((country) => {
        country.languages.forEach((language) => {
            languageCount[language] = (languageCount[language] || 0) + 1
        })
    })
    const langArray = Object.keys(languageCount).map((language) => {
        return {
            language: language,
            count: languageCount[language]
        }
    })
    langArray.sort((a,b) => b.count - a.count)
    return langArray.filter((language,index) => index < length)
}
console.log(mostSpokenLanguages(countries,10))