import React, { useEffect, useState, createContext, useContext } from 'react';
import ThemeContext from './ThemeContext';

export default function ChildComponent() {
    const {color,backgroundColor} = useContext(ThemeContext);
    return (
        <div style={{color,backgroundColor}}>
            <p> c lenfant</p>
            <h1>Child Component</h1>
        </div>
    )
}