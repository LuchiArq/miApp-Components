import React from 'react'
import Icon from '../../atoms/Icon'
import PropTypes from 'prop-types'
import './dropDown.css'

const DropDown = ({ options, value, onChange }) => (
  <div className="dropdown">
    <Icon type="angleDown" hasBackground />
    <select className="dropdown-select" onChange={onChange} value={value}>
      {options.map(({ text, value }) => (
        <option key={value}>{text}</option>
      ))}
    </select>
  </div>
)

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
}

DropDown.propDefault = {
  value: '',
}
export default DropDown
