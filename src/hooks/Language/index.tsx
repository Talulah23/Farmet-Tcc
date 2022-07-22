// import useLogic from './logic';

import { createContext } from "react";

interface LanguageContextData {     
    languageSelectPt:  
}

const LanguageContext = createContext<LanguageContextData>( {} as LanguageContextData,);

interface LProps {
    children: React.ReactNode;
}
