import React from 'react'
import { mapTypes } from './helpers'

const Icon = ({ type }) => (
  <div>
    <img src={mapTypes(type)} alt="" />
  </div>
)

export default Icon
