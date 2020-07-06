import locations from '../store/location'
import './plagins'
import '../css/style.css'
import formUI from './views/form'

document.addEventListener('DOMContentLoaded', (e) => {
  const form = formUI.form

  initApp()

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    onFormSubmit()
  })
  async function initApp() {
    await locations.init()

    formUI.setAutocompleteData(locations.shortCities)
  }
  async function onFormSubmit() {
    console.log('formUI.originValue', formUI.originValue)
    const origin = locations.getCityCodeByKey(formUI.originValue)
    const destination = locations.getCityCodeByKey(formUI.destinationValue)
    const depart_date = formUI.departDateValue
    const return_date = formUI.returnDateValue
    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      // currency,
    })
  }
})
