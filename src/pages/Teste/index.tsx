import { createContext, useContext } from 'react'


interface Props{
    children: React.ReactNode
}


export default function ThemeProvider({children}: Props) {
    const { font }
    const darkmode = true;
    const header = 26;
    const paragraph = 16;
    
    };


    const fontSize = useMemo(
        () => ({
            header,
            paragraph,
        }),
        [header, paragraph]
    )


    const contextValue = useMemo(
        () => ({
            darkmode,
            fontSize,
        }),
        [darkmode, fontSize]
    )
}