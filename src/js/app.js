import location from '../store/location'
import './plagins'
import '../css/style.css'
location.init().then((res) => {
  console.log('location', location.countries)
})
