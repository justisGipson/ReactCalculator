import React from "react";
import NumButton from './NumButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import Display from './Display';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegButton from './NegButton';
import {CalcStyles} from './styles/Styles';

const Calculator = () => (
    <CalcStyles>
        <div className="display">
            <h1>Calculator</h1>
            <Display />
        </div>
        <div className='number-pad'>
            <ClearButton />
            <BackButton />
            <NegButton />
            <FunctionButton buttonValue='/' />
            <NumButton buttonValue={7} />
            <NumButton buttonValue={8} />
            <NumButton buttonValue={9} />
            <FunctionButton buttonValue='*' />
            <NumButton buttonValue={4} />
            <NumButton buttonValue={5} />
            <NumButton buttonValue={6} />
            <FunctionButton buttonValue='-' />
            <NumButton buttonValue={1} />
            <NumButton buttonValue={2} />
            <NumButton buttonValue={3} />
            <FunctionButton buttonValue='+' />
            <div className='zero-button'>
                <NumButton buttonValue={0} />
            </div>
            <NumButton buttonValue='.' />
            <EqualButton />
        </div>
    </CalcStyles>
);

export default Calculator;