import api from "../services/apiService";

class Location {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }
  async init() {
    const response = await Promise.all([
      this.api.countries(),
      this.api.cities(),
    ]);
    const [countries, cities] = response;
    this.countries = countries;
    this.cities = cities;
    console.log("response", response);
    return response;
  }
  getCitiesByCountryCode(code) {
    return this.cities.filter((city) => city.country_code === code);
  }
}

const location = new Location(api);

export default location;
