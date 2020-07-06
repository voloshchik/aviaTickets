import api from '../js/services/apiService'

class Locations {
  constructor(api) {
    this.api = api
    this.countries = null
    this.cities = null
    this.shortCities = {}
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ])
    const [countries, cities] = response

    this.countries = this.serializeCountries(countries)

    this.cities = this.serializeCities(cities)
    this.shortCities = this.createShortCitiesList(this.cities)

    return response
  }

  createShortCitiesList(cities) {
    return Object.entries(cities).reduce((acc, [key]) => {
      acc[key] = null
      return acc
    }, {})
  }

  serializeCities(cities) {
    return cities.reduce((acc, city) => {
      const country_name = this.getCountryNameByCode(city.country_code)
      const city_name = city.name || city.name_translations.en
      const key = `${city_name},${country_name}`
      acc[key] = city
      return acc
    }, {})
  }
  getCountryNameByCode(code) {
    return this.countries[code].name
  }

  getCityCodeByKey(key) {
    return this.cities[key].code
  }
  serializeCountries(countries) {
    return countries.reduce((acc, country) => {
      acc[country.code] = country
      return acc
    }, {})
  }

  async fetchTickets(params) {
    const response = await this.api.prices(params)
    console.log(response)
    // this.lastSearch = response.data
    // серилизовать поиск так что бы внури были название города и страны
  }
}

const locations = new Locations(api)

export default locations
