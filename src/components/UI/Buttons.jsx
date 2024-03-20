import React from 'react';

const Buttons = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default Buttons;