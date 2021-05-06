import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import './spacer.css'

const getZise = (zise) => choices.spacing[zise]

const Vertical = ({ zise, isVisilble, maxHeight }) => (
  <div
    style={{
      display: 'block',
      width: getZise(zise),
      height: '100vh',
      maxHeight,
    }}
    className={classNames('spacer', {
      'is-visible': isVisilble,
    })}
  ></div>
)

Vertical.propDefault = {
  maxHeight: '100%',
}

Vertical.propTypes = {
  zise: PropTypes.number.isRequired,
  maxHeight: PropTypes.oneOf(PropTypes.number, PropTypes.string),
  isVisilble: PropTypes.bool,
}
export default Vertical
