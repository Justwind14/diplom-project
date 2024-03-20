import React from 'react';

const Inputs = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props}/>
    );
});

export default Inputs;