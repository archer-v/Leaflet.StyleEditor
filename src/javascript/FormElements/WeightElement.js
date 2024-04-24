import 'leaflet'

/**
 * FormElement used to style weight
 */
export default function setupWeightElement () {
  L.StyleEditor.formElements.WeightElement = L.StyleEditor.formElements.FormElement.extend({
    defaultOptions: {
      min: 0,
      max: 20
    },
    /** create number input box */
    createContent: function () {
      this.options.label = L.DomUtil.create('span', 'leaflet-styleeditor-input-span', this.options.uiElement)

      let weight = this.options.weight = L.DomUtil.create('input', 'leaflet-styleeditor-input',
        this.options.uiElement)
      weight.type = 'range'
      weight.min = this.defaultOptions.min
      weight.max = this.defaultOptions.max
      weight.step = 1
      weight.value = 2

      // add event listeners
      L.DomEvent.addListener(weight, 'change', this._setStyle, this)
      L.DomEvent.addListener(weight, 'input', this._setStyle, this)
      L.DomEvent.addListener(weight, 'keyup', this._setStyle, this)
      L.DomEvent.addListener(weight, 'mouseup', this._setStyle, this)
    },

    /** set correct value */
    style: function () {
      let value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption) * 1
      // limit value to min/max
      let fixedValue = value
      fixedValue = Math.max(fixedValue, this.options.weight.min)
      fixedValue = Math.min(fixedValue, this.options.weight.max)
      this.options.weight.value = fixedValue
      this.options.label.innerText = fixedValue
      if (value !== fixedValue) {
        this._setStyle()
      }
    },

    /** communicate weight value */
    _setStyle: function () {
      this.setStyle(this.options.weight.value)
    },

    setOptions: function (options) {
      this.options.weight.min = (options && 'min' in options) ? options.min : this.defaultOptions.min
      this.options.weight.max = (options && 'max' in options) ? options.max : this.defaultOptions.max
    }
  })
}
