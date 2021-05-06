import PropTypes from 'prop-types'
import './input.css'

const Input = ({ type, value, onChange, placeHolder }) => (
  <input
    className="input"
    type={type}
    value={value}
    placeHolder={placeHolder}
    onChange={onChange}
  ></input>
)

Input.defaultProps = {
  type: 'text',
  value: '',
  placeHolder: '',
}

Input.propTypes = {
  type: PropTypes.oneOf['text'],
  value: PropTypes.string,
  placeHolder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Input
