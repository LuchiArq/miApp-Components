import React from 'react'
import Icon from '../../atoms/Icon'
import './dropDown.css'

const DropDown = () => (
  <div className="dropdown">
    <Icon type="angleDown" hasBackground />
    <select className="dropdown-select" name="" id="">
      <option value="">8:00 AM</option>
      <option value="">9:00 AM</option>
    </select>
  </div>
)

export default DropDown
