import React, { useState } from 'react';
import ThemeContext from './ThemeContext';
import ChildComponent from './ChildComponent';
export function Parent({ children }) {
    const [colorState, setColorState] = useState({color:'black',backgroundColor:'white'});

    const changeColor = () => {
        setColorState({color:'white',backgroundColor:'black'});
    };

    return (
        <ThemeContext.Provider value={{ colorState, changeColor }}>
            <ChildComponent/>
        </ThemeContext.Provider>
    );
}