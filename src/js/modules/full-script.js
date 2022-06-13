import { createTheTitle } from './helpers'
import { createTheItem, createTheItems } from './html-components'

export default function fullScript() {
  const theTypes = ['button']
  const gridMain = document.querySelector('#grid--box')
  const theItems = []

  theTypes.forEach((type, index) => {
    for (let styleIndex = 0; styleIndex < 4; styleIndex++) {
      theItems.push(
        createTheItem(type, createTheTitle(type), index, styleIndex)
      )
    }
  })
  theItems.forEach((item) => {
    gridMain.append(item)
  })
}
