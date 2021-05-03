import React from 'react'
import PropTypes from 'prop-types'
import { mapType, mapZise } from './helpers'
import ClassNames from 'classnames'
import Picture from '../Picture'
import './icon.css'

const Icon = ({ type, size, hasBackground }) => (
  <div
    className={ClassNames('icon', {
      'has-background': hasBackground,
    })}
    style={{ width: mapZise(size), height: mapZise(size) }}
  >
    <Picture src={mapType(type)} width={mapZise(size)} />
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  hasBackground: PropTypes.bool,
}

Icon.defaultProps = {
  size: 'md',
  hasBackground: false,
}
export default Icon
