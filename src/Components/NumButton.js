import React, {useContext} from 'react';
import {NumberContext} from './NumProvider';

const NumButton = ({buttonValue}) => {
    const { handleSetDisplayValue } = useContext(NumberContext);
    return (
        <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default NumButton;