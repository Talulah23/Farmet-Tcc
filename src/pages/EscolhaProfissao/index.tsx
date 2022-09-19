import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import CheckBox from '@react-native-community/checkbox';
import { ScrollView } from 'react-native';
import { Styles } from "./styles.native";
import Plus from "../../assets/mais.png";
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
    const [gleeCheckBox, setGleeCheckBox] = useState(false);
    
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <Container>
            <View>
                <ScrollView>
                        <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text>Confeitaria</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={checkBox}
                        onValueChange={(newValue) => setCheckBox(newValue)}
                    />
                    <Text>Marceneiro</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={togCheckBox}
                        onValueChange={(newValue) => setTogCheckBox(newValue)}
                    />
                    <Text>Baba</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={toleCheckBox}
                        onValueChange={(newValue) => setToleCheckBox(newValue)}
                    />
                    <Text>Chaveiro</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={oggleCheckBox}
                        onValueChange={(newValue) => setOggleCheckBox(newValue)}
                    />
                    <Text>Manicure</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={gleCheckBox}
                        onValueChange={(newValue) => setGleCheckBox(newValue)}
                    />
                    <Text>Empregada doméstica</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={gleeCheckBox}
                        onValueChange={(newValue) => setGleeCheckBox(newValue)}
                    />
                    <Text>Pintor</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={gleeCheckBox}
                        onValueChange={(newValue) => setGleeCheckBox(newValue)}
                    />
                    <Text>Pintor</Text>
                    <CheckBox
                        style={Styles.checkboxContainer}
                        disabled={false}
                        value={gleeCheckBox}
                        onValueChange={(newValue) => setGleeCheckBox(newValue)}
                    />
                    <Text>Pintor</Text>
                        <Image style={Styles.buttonColor} source={Plus}></Image>
                </ScrollView>
            </View>
               <TouchableOpacity
                    // onPress={() => navigate.navigate('FeedProfissão')}
                    >
                    <Text style={Styles.textButton}>Próximo</Text>
               </TouchableOpacity>
        </Container>
);
}
// onPress={() => navigate.navigate('form')}