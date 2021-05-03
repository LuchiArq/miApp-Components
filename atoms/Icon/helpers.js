const ICON_ASSETS_PATH = '/icons/'

const iconMap = {
  arrowRight: 'arrow-right',
  angleDown: 'angle-down',
}

const iconZise = {
  sm: 16,
  md: 25,
  lg: 29,
  xl: 36,
}

export const mapType = (type) => `${ICON_ASSETS_PATH}${iconMap[type]}.svg`
export const mapZise = (zise) => iconZise[zise]
