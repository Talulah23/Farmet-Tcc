import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { Styles } from "./styles.native";
import Plus from "../../assets/plus.png";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";



export default function EscolhaProfessao(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [checkBox, setCheckBox] = useState(false);
    const [togCheckBox, setTogCheckBox] = useState(false);
    const [toleCheckBox, setToleCheckBox] = useState(false);
    const [oggleCheckBox, setOggleCheckBox] = useState(false);
    const [gleCheckBox, setGleCheckBox] = useState(false);
    
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <Container>
            <View>
                <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
               />
               
               <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={checkBox}
                onValueChange={(newValue) => setCheckBox(newValue)}
               />
               
               <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={togCheckBox}
                onValueChange={(newValue) => setTogCheckBox(newValue)}
               />
               
               <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={toleCheckBox}
                onValueChange={(newValue) => setToleCheckBox(newValue)}
               />
               
               <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={oggleCheckBox}
                onValueChange={(newValue) => setOggleCheckBox(newValue)}
               />
               
               <CheckBox
                style={Styles.checkboxContainer}
                disabled={false}
                value={gleCheckBox}
                onValueChange={(newValue) => setGleCheckBox(newValue)}
               />
               <TouchableOpacity style={Styles.buttonColor} >
                   <Image source={Plus}></Image>
               </TouchableOpacity>
            </View>
        </Container>
);
}
// onPress={() => navigate.navigate('form')}