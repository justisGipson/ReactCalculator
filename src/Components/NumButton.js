import React, {useContext} from 'react';
import NumberContext from './NumProvider';

const ButtonName = ({buttonValue}) => {
    const {handleSetDisplayValue} = useContext(NumberContext);
    return (
        <button type='button' onClick={() => handleSetDisplayValue(buttonValue)}>
            {buttonValue}
        </button>
    );
};

export default ButtonName;