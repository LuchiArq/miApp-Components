const { choices, decisions } = require('../tokens')
const fs = require('fs')

const toKabebabCase = (string) => {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}

function transformTokens(parentKey, obj) {
  const keys = Object.keys(obj)

  return keys.reduce((acc, key) => {
    const value = obj[key]

    if (typeof value === 'object') {
      const customProperties = parentKey ? `${parentKey}-${key}` : `${key}`
      return `${acc}\n\t${transformTokens(
        `${toKabebabCase(customProperties)}`,
        value
      )}`
    }

    return `${acc}\n\t--${parentKey}-${toKabebabCase(key)}:${value};`
  }, '')
}

function buildTokens() {
  const customProperties = `
        ${transformTokens(null, choices)}
        ${transformTokens(null, decisions)}
    `

  const data = [':root { ', customProperties.trim()].join(`\n\t`).concat('\n}')

  fs.writeFile('./styles/tokens.css', data, 'utf8', (err) => {
    if (err) return console.log(err)
  })
}
buildTokens()
