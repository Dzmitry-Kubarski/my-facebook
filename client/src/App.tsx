import React, { FC } from 'react';

import TextField from './components/shared/TextField/TextField';

const App: FC = () => {
    return (
        <div style={{ padding: '80px' }}>

            <TextField label='Your Email' type='tel' />

            <TextField label='Username' type='text' />

        </div>
    );
};

export default App;


