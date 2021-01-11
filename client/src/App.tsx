import React, { FC } from 'react';

import TextField from './components/shared/TextField/TextField';
import Button from './components/shared/Button/Button';

const App: FC = () => {
    return (
        <div style={{ padding: '80px' }}>

            <TextField label='Your Email' type='tel' />

            <TextField label='Username' type='text' />

            <Button text='button' full />

            <Button text='button' full secondary />

            <Button text='button' full secondary />

        </div>
    );
};

export default App;


