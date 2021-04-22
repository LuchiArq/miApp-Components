const { choices, decisions } = require('../tokens.js');
const fs = require('fs');




const toKabebabCase = (string) => {
    return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

function transformTokens(parentKey, obj) {
    const keys = Object.keys(obj)

    return choiseStr = keys.reduce((acc, key) => {

        const value = obj[key]

        if (typeof value === 'object') {
            const customProperties = parentKey ? `${parentKey}-${key}` : `${key}`
            return `${acc}
    ${transformTokens(`${toKabebabCase(customProperties)}`, value)}`
        }

        return `${acc}
--${parentKey}-${toKabebabCase(key)}:${value};`
    }, '')
}

function buildCustomProperties() {

    const customProperties = `
        ${transformTokens(null, choices)}
        ${transformTokens(null, decisions)}
    `;

    const data = [":root { ", customProperties.trim(), "}"].join(`\n`);

    fs.writeFile('./tokens.css', data, 'utf8', (err) => {
        if (err) return console.log(err)
    });
}
buildCustomProperties()
