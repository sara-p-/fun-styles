import { createTheTitle } from './helpers'
import { createTheItem } from './html-components'

export default function fullScript() {
  const theTypes = ['button', 'input']
  const gridMain = document.querySelector('#grid--main')
  const theItems = []

  theTypes.forEach((type, index) => {
    for (let styleIndex = 0; styleIndex < 5; styleIndex++) {
      theItems.push(
        createTheItem(type, createTheTitle(type), index, styleIndex)
      )
    }
  })
  theItems.forEach((item) => {
    gridMain.append(item)
  })
}
