import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames' 
import './heading.css';

const Heading = ({children,size,color}) =><heading className={ClassNames('heading',{
    [`size-${size}`]:size,
    [`color-${color}`]:color,

})}>{children}</heading>

Heading.propTypes = {
    children : PropTypes.node.isRequired,
    size: PropTypes.oneOf['xs','sm','md'],
    color: PropTypes.oneOf['primary','default']
}

Heading.defaultProps = {
    color:'default',
    size:'md'
}
export default Heading