import PropTypes from 'prop-types'
import classNames from 'classnames'
import { choices } from '../../tokens'
import Vertical from './Vertical'
import Horizontal from './Horizontal'

import './spacer.css'

const getZise = (zise) => choices.spacing[zise]

const Spacer = ({ zise, isVisilble }) => (
  <div
    style={{
      display: 'inline-block',
      width: getZise(zise),
      height: getZise(zise),
    }}
    className={classNames('spacer', {
      'is-visible': isVisilble,
    })}
  ></div>
)

Spacer.propTypes = {
  zise: PropTypes.number.isRequired,
  isVisilble: PropTypes.bool,
}

Spacer.Horizontal = Horizontal
Spacer.Vertical = Vertical

export default Spacer
