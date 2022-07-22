import { useEffect, useState } from "react";
import { AsyncStorage } from "react-native";

export default function useLogic(){
    const [darkMode, setDarkmode] = useState(false);
    const [fontSize, setFontSize] = useState({
        header: 27,
        paragraph: 16,
    });

    useEffect{() =>{
        AsyncStorage.getItem('darkMode').then(value => {
        if (value !== null) {
            setDarkmode(value === 'true');
            }
    });

    const saveDarkModeInStorage = (value: boolean) => {
        AsyncStorage.setItem(
            'darkMode',
            value.toString()
        ).then(() => {
            setDarkmode(value);
        }
        )
    };

    const saveFontSizeInStorage = (value: {
        header: string, 
        paragraph:string,
    }) => {
        AsyncStorage.setItem(
            'fontSize', 
            value.toString()
        ).then(() => {
            setFontSize(value);
        }
        )
    };

    return{
        darkMode,
        fontSize,
        setDarkmode: saveDarkModeInStorage,
        setFontSize: saveFontSizeInStorage,
    };
}