const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ]
const countriesObject = {
    'Finland': 'Helsinki',
    'Sweden': 'Stockholm',
    'Norway': 'Oslo'
}
// Display the countries array as a table
console.table(countries)
// Display the countries object as a table
console.table(countriesObject)
// Use console.group() to group logs
console.group('Countries')
console.log(countries)
console.groupEnd()
console.group('Countries Object')
console.log(countriesObject)
console.groupEnd()