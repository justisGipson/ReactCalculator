import React, { useContext } from 'react';
import { NumberContext } from './NumProvider';

const ClearButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => handleClearValue()}>
      C
    </button>
  );
};

export default ClearButton;