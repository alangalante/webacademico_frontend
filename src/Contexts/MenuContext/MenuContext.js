import { createContext, useState } from 'react';

export const MenuContext = createContext();

export const MenuContextProvider = ({children}) => {
    const [open, setOpen] = useState(true);
    const [mostrar, setMostrar] = useState(false);


    return (
        <MenuContext.Provider
            value={{
                open, setOpen,
                mostrar, setMostrar
            }}>
            {children}
        </MenuContext.Provider>
    )
}
