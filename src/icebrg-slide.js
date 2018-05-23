import React, { Fragment } from 'react';
import {Deck} from 'spectacle';

import icebrgLogo from './images/logo.png';

const imageStyles = {
    position: 'absolute',
    width: 100,
    height: 'auto',
    zIndex: 100,
    top: 20,
    left: 20,
};

const IcebrgSlide = (props) => {
    const { children, ...rest } = props;
    return (
        <Fragment>
            <Deck {...rest}>
                {children}
            </Deck>
            <img src={icebrgLogo} style={imageStyles} alt="ICEBRG"/>
        </Fragment>
    )
};

export default IcebrgSlide;