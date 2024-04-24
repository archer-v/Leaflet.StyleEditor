/**
 * FormElement used for styling the dash attribute
 */
import 'leaflet'

export default function setupDashElement () {
  L.StyleEditor.formElements.DashElement = L.StyleEditor.formElements.FormElement.extend({
    dashOptions: [{
      style: '1',
      backgroundPositionDecorator: '0px -75px'
    }, {
      style: '10, 10',
      backgroundPositionDecorator: '0px -95px'
    }, {
      style: '15, 10, 1, 10',
      backgroundPositionDecorator: '0px -115px'
    }],
    /** create the three standard dash options */
    createContent: function () {
      let uiElement = this.options.uiElement
      for (let opt in this.dashOptions) {
        let stroke = L.DomUtil.create('div', 'leaflet-styleeditor-stroke', uiElement)
        stroke.style.backgroundPosition = this.dashOptions[opt].backgroundPositionDecorator
        L.DomEvent.addListener(stroke, 'click', function () {
          this.setStyle(this.dashOptions[opt].style)
        }, this)
      }
    },
    /** decorate element with "selected" style **/
    style: function () {
      let value = this.options.styleEditorOptions.util.getStyle(this.options.styleOption)
      let dashIndex = null
      for (let i = 0; i < this.dashOptions.length; i++) {
        if (this.dashOptions[i].style === value) {
          dashIndex = i
          break
        }
      }
      let dashElements = this.options.uiElement.getElementsByClassName('leaflet-styleeditor-stroke')
      for (let i = 0; i < dashElements.length; i++) {
        if (i === dashIndex) {
          dashElements[i].classList.add('leaflet-styleeditor-selected')
        } else {
          dashElements[i].classList.remove('leaflet-styleeditor-selected')
        }
      }
    }
  })
}
