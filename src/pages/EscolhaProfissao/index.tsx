import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from "react";
import CheckBox from '@react-native-community/checkbox';
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";

export default function EscolhaConta(){
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <Container>
                <TextInput></TextInput>
            {/* <Container  style={Styles.cardContainer}>
            </Container> */}
            <View>
                <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
               />
            </View>
        </Container>
);
}