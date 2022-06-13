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
  const buttons = document.createElement('div')
  buttons.classList.add('buttons')

  const button = document.createElement('button')
  button.classList.add('button--' + style)
  button.innerText = 'Style ' + style

  buttons.append(button)

  return buttons
}

export function createTheSection(type, title, typeIndex) {
  const section = document.createElement('section')
  section.classList.add('section')
  section.setAttribute('id', type)

  const sectionTitle = document.createElement('h1')
  sectionTitle.classList.add('section__title')

  const sectionGrid = document.createElement('div')
  sectionGrid.classList.add('section__grid', 'grid')

  section.append(sectionTitle)
  section.append(sectionGrid)

  return section
}

export function createTheItem(type, title, typeIndex, styleIndex) {
  let innerItem
  const item = document.createElement('div')
  item.classList.add(
    'item',
    'item__type--' + typeIndex,
    'item__style--' + styleIndex
  )
  item.setAttribute('data-type-index', typeIndex)
  item.setAttribute('data-style-index', styleIndex)

  const item__wrapper = document.createElement('div')
  item__wrapper.classList.add('item__wrapper')

  // const item__title = document.createElement('h2')
  // item__title.classList.add('item__title')
  // item__title.innerText = title

  const item__content = document.createElement('div')
  item__content.classList.add('item__content')

  if (type == 'button') {
    innerItem = createTheButton(styleIndex)
  }
  if (type == 'input') {
    innerItem = createTheInput(styleIndex)
  }

  item__content.append(innerItem)
  // item__wrapper.append(item__title)
  item__wrapper.append(item__content)
  item.append(item__wrapper)

  return item
}

export function createTheItems(
  type,
  title,
  typeIndex,
  styleIndex,
  versionIndex
) {
  let innerItem
  const item = document.createElement('div')
  item.classList.add(
    'item',
    'item__type--' + typeIndex,
    'item__style--' + styleIndex,
    'item__version--' + versionIndex
  )
  item.setAttribute('data-type-index', typeIndex)
  item.setAttribute('data-style-index', styleIndex)
  item.setAttribute('data-version-index', versionIndex)

  const item__wrapper = document.createElement('div')
  item__wrapper.classList.add('item__wrapper')

  const item__title = document.createElement('h2')
  item__title.classList.add('item__title')
  item__title.innerText = title

  const item__content = document.createElement('div')
  item__content.classList.add('item__content')

  if (type == 'button') {
    innerItem = createTheButton(styleIndex)
  }
  if (type == 'input') {
    innerItem = createTheInput(styleIndex)
  }

  item__content.append(innerItem)
  item__wrapper.append(item__title)
  item__wrapper.append(item__content)
  item.append(item__wrapper)

  return item
}
