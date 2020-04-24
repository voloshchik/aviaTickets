import axios from "axios";
import config from "../config/apiConfig";

/**
 * /countries - array of countries
 * /cities - array of cities
 * /prices/cheap - array
 */

class Api {
  constructor(config) {
    this.url = config.url;
  }

  async countries(){
      try {
          const respons=await axios.get(`${this.url}/countries`)
        //   console.log('respons', respons)
          return respons.data
      } catch (error) {
          console.log(error)
      }
  }

  async cities(){
      try {
        const respons=await axios.get(`${this.url}/cities`)
        // console.log('respons', respons)
        return respons.data
      } catch (error) {
          console.log(error)
      }
  }

  async price(params){
      try {
          
      } catch (error) {
          console.log(error)
      }
  }
}

const api = new Api(config);

export default api;
