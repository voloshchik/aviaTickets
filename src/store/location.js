import api from '../js/services/apiService'

class Location {
  constructor(api) {
    this.api = api
    this.countries = null
    this.cities = null
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ])
    const [countries, cities] = response

    this.countries = this.serializeCountries(countries)
    // console.log('this.countries', this.countries)
    this.cities = cities

    return response
  }

  serializeCountries(countries) {
    return countries.reduce((acc, country) => {
      acc[country.code] = country
      return acc
    }, {})
  }

  getCitiesByCountryCode(code) {
    return this.cities.filter((city) => city.country_code === code)
  }
}

const location = new Location(api)

export default location
