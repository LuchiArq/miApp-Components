import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import './spacer.css'

const getZise = (zise) => choices.spacing[zise]

const Horizontal = ({ zise, isVisilble }) => (
  <div
    style={{
      display: 'block',
      width: '100%',
      height: getZise(zise),
    }}
    className={classNames('spacer', {
      'is-visible': isVisilble,
    })}
  ></div>
)

Horizontal.propTypes = {
  zise: PropTypes.number.isRequired,
  isVisilble: PropTypes.bool,
}
export default Horizontal
