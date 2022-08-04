import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";
import Avatar from "../../assets/perfil.jpg";
import { Alert } from "react-native";
import {ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from "react";

export default function InformacaoProfissional(){

        const setImageUser = useState
        const handleImgUser = () =>{
                Alert.alert(
                        "Selecione",
                        "Informe onde você vai pegar sua foto!",
                        [
                                {
                                        text: "Galeria",
                                        onPress: () => pickImageFromGalery(),
                                        style: "default"
                                },
                                {
                                        text: "Camera",
                                        onPress: () => pickImageFromCam(),
                                        style: "default"
                                }
                        ],
                        
                        {
                                cancelable: true,
                                onDismiss: () =>console.log('Deixa pra próxima')
                        }
                
                )
        }

        const pickImageFromGalery = async () => {
                const options: ImageLibraryOptions = {
                        mediaType: 'photo'
                }

                const result = await launchImageLibrary(options);
                
                if(result?.assets){
                        setImageUser(result.assets[0].uri!)
                        return
                }
        } 

        const pickImageFromCam = () => {
                
        } 

    return (
        <Container>
                <View>
                <TouchableOpacity style={Styles.buttonColor} onPress={() => handleImgUser}>
                    <Image source={Logo}></Image>
                </TouchableOpacity>
                    <View/>
                    <TextInput style={Styles.cardText} placeholder="Nome Usuário:"></TextInput>
                    <View/>
                    <TextInput placeholder="Número:"></TextInput>
                    <View/>
                    <TextInput placeholder="Endereço:"></TextInput>
                    <View/>
                    <TouchableOpacity>
                        <View style={Styles.viewStyle}>
                            <Image style={Styles.imageStyle} source={Seta}></Image>
                        </View>
                    </TouchableOpacity>
                </View>
        </Container>
);
}