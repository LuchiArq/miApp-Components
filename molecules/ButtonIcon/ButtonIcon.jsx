import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';

const ButtonIcon = ({children,type,icon}) => (

    <Button type={type} isBlock={false}>
        {children}
        <span style={{marginRight:10}}></span>
        <Icon type={icon}></Icon>
    </Button>
);


ButtonIcon.propTypes = {
    children : PropTypes.node.isRequired,
    type: PropTypes.oneOf['primary','secondary','tertiary'],
    icon: PropTypes.string.isRequired
};

ButtonIcon.defaultProps = {
    type:'secondary'
};

export default ButtonIcon;