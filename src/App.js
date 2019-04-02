import React from 'react';
import Calculator from './Components/Calculator';
import NumProvider from './Components/NumProvider';

const App = () => (
  <NumProvider>
    <Calculator />
  </NumProvider>
);

export default App;
