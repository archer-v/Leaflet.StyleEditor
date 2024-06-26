import 'leaflet'

/** Form used to enable modification of a Geometry */
export default function setupGeometryForm () {
  L.StyleEditor.forms.GeometryForm = L.StyleEditor.forms.Form.extend({
    options: {
      formOptionKey: 'geometry',
      formElements: {
        'color': L.StyleEditor.formElements.ColorElement,
        'opacity': L.StyleEditor.formElements.OpacityElement,
        'weight': L.StyleEditor.formElements.WeightElement,
        'dashArray': L.StyleEditor.formElements.DashElement,
        'fillColor': L.StyleEditor.formElements.ColorElement,
        'fillOpacity': L.StyleEditor.formElements.OpacityElement,
        'popupContent': L.StyleEditor.formElements.PopupContentElement
      }
    },

    /** show the fillOptions (fillColor and fillOpacity) only if the Element can be filled */
    showFormElements: function (options) {
      for (let i = 0; i < this.options.initializedElements.length; i++) {
        let option = null
        if (options && this.options.initializedElements[i].options.styleOption in options) {
          option = options[this.options.initializedElements[i].options.styleOption]
        }
        if (this.options.initializedElements[i].options.styleOption.indexOf('fill') === 0) {
          if (this.options.styleEditorOptions.util.fillCurrentElement()) {
            this.showFormElement(this.options.initializedElements[i], option)
          } else {
            this.options.initializedElements[i].hide()
          }
        } else {
          this.showFormElement(this.options.initializedElements[i], option)
        }
      }
    }
  })
}
