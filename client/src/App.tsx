import React, { FC } from 'react';

import Button from './components/shared/Button/Button';

const App: FC = () => {
    return (
        <div style={{ padding: '80px' }}>

            <Button text='new button 1' disabled />

            <Button text='new button 1' full />

            <Button text='noShadow' color='secondary' noShadow />

        </div>
    );
};

export default App;


