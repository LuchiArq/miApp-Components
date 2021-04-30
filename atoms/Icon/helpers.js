const ICON_ASSETS_PATH = '/icons/'

const IconMap = {
  rightArrow: 'right-arrow',
}

export const mapTypes = (type) => `${ICON_ASSETS_PATH}${IconMap[type]}.svg`
