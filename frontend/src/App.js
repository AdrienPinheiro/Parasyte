import React, { useState } from 'react';
import {UidContext} from './react/html/components/AppContext';


import Router from './react/html/components/index';



const App = () => {

    return (
        <UidContext.Provider value={}>
            <Router/>
        </UidContext.Provider>
    )
}

export default App;