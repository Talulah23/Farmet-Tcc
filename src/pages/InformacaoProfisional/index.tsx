import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import { Styles } from "./styles.native";
import Seta from "../../assets/seta.png";
import Logo from "../../assets/logo.png";
import { Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function InformacaoProfissional(){

        const [imageUser, setImageUser] = useState<string>(Logo);

        const pickImageFromGalery = async () => {

                const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                      });
                
                if(!result.cancelled){
                        setImageUser(result.uri)
                }
        };

        // const pickImageFromCam = async () => {

        //         const options: CameraOptions = {
        //                 mediaType: 'photo',
        //                 saveToPhotos: false,
        //                 cameraType: 'front',
        //                 quality: 1
        //         }

        //         const result = await launchCamera(options);

        //         console.log(result)

                
        //         if(result?.assets){
        //                 setImageUser(result.assets[0].uri!)
        //                 return
        //         }
        // };

    return (
        <Container>
                <View>
                <TouchableOpacity onPress={() => {pickImageFromGalery}}>
                    <Image source={{uri: imageUser}}></Image>
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