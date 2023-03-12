import React, { Component }  from 'react';
import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuContextProvider = ({children}) => {
    const [open, setOpen] = useState(true);


    return (
        <MenuContext.Provider
            value={{
                open, setOpen
            }}>
            {children}
        </MenuContext.Provider>
    )
}
