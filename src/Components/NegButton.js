import React, { useContext } from 'react';
import { NumberContext } from './NumProvider';

const NegativeButton = () => {
  const { handleToggleNegative } = useContext(NumberContext);
  return (
    <button type="button" className="white-button" onClick={() => handleToggleNegative()}>
      -/+
    </button>
  );
};

export default NegativeButton;