const iconPath = '/icons/'

const iconsList = {
    'right-arrow':'right-arrow.svg',
}

const getIconList = (type) => {
    return  `${iconPath}${iconsList[type]}`
}

export default getIconList