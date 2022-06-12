export function createTheTextBlock(title) {
  const h1 = document.createElement('h1')
  h1.classList.add('item__type-title')
  h1.innerText = title

  return h1
}

export function createTheInput(style) {
  const itemFieldset = document.createElement('div')
  itemFieldset.classList.add('item__fieldset')

  const label = document.createElement('label')
  label.classList.add('item__label')
  label.innerHTML = 'Style ' + style

  const input = document.createElement('input')
  input.setAttribute('type', 'text')
  input.classList.add('input--' + style)

  itemFieldset.append(label)
  itemFieldset.append(input)

  return itemFieldset
}

export function createTheButton(style) {
  const button = document.createElement('button')
  button.classList.add('button--' + style)
  button.innerText = 'Style ' + style

  return button
}

export function createTheItem(type, title, typeIndex, styleIndex) {
  let innerItem
  const item = document.createElement('div')
  item.classList.add(
    'item',
    'item__type--' + typeIndex,
    'item__style--' + styleIndex
  )

  const item__wrapper = document.createElement('div')
  item__wrapper.classList.add('item__wrapper')

  const item__content = document.createElement('div')
  item__content.classList.add('item__content')

  if (styleIndex < 1) {
    innerItem = createTheTextBlock(title)
  } else {
    if (type == 'button') {
      innerItem = createTheButton(styleIndex)
    }
    if (type == 'input') {
      innerItem = createTheInput(styleIndex)
    }
  }

  item__content.append(innerItem)
  item__wrapper.append(item__content)
  item.append(item__wrapper)

  return item
}
