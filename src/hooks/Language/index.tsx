// import useLogic from './logic';

import { createContext } from "react";

interface LanguageContextData {     
    LanguageSelect: 
}

const LanguageContext = createContext<LanguageContextData>( {} as LanguageContextData,);

interface LProps {
    children: React.ReactNode;
}