import {
  getAutocompleteInstance,
  getDatePickerInstance,
} from '../plagins/materialize'

class FormUI {
  constructor(autocompleteInstance, datePickerInstance) {
    this.$form = document.forms['locationControls']
    this.origin = document.getElementById('autocomplete-origin')
    this.destination = document.getElementById('autocomplete-destination')
    this.depart = document.getElementById('datepicker-depart')
    this.return = document.getElementById('datepicker-return')
    this.originAutocomplete = autocompleteInstance(this.origin)
    this.destinationAutocomplete = autocompleteInstance(this.destination)
    // this.depart = datePickerInstance(
    //     document.getElementById('datepicker-depart'),
    //   );
    //   this.return = datePickerInstance(
    //     document.getElementById('datepicker-return'),
    //   );
    this.departDatePicker = datePickerInstance(this.depart)
    this.returnDatePicker = datePickerInstance(this.return)
  }

  get form() {
    return this.$form
  }

  get originValue() {
    return this.origin.value
  }

  get destinationValue() {
    return this.destination.value
  }

  get departDateValue() {
    return this.depart.toString()
  }

  get returnDateValue() {
    return this.return.toString()
  }

  setAutocompleteData(data) {
    this.originAutocomplete.updateData(data)
    this.destinationAutocomplete.updateData(data)
  }
}

const formUI = new FormUI(getAutocompleteInstance, getDatePickerInstance)

export default formUI
