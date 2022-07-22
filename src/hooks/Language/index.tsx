// import useLogic from './logic';

import { createContext } from "react";

interface LanguageContextData {     
    languageSelect: 
}

const LanguageContext = createContext<LanguageContextData>( {} as LanguageContextData,);

interface LProps {
    children: React.ReactNode;
}

const a:LanguageContextData = {};