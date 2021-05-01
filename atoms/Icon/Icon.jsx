import React from 'react'
import PropTypes from 'prop-types'
import { mapTypes } from './helpers'

const Icon = ({ type }) => (
  <div>
    <img src={mapTypes(type)} alt="" />
  </div>
)

Icon.propTypes = {
  type: PropTypes.string.isRequired,
}
export default Icon
