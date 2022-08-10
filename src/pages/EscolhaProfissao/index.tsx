import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Styles } from "./styles.native";
import Plus from "../../assets/plus.png";



export default function EscolhaProfessao(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <Container>
            <View>
                <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
               />
               <TouchableOpacity style={Styles.buttonColor}>
                   <Image source={Plus}></Image>
               </TouchableOpacity>
            </View>
        </Container>
);
}