import { Container, Text, Paragraph, View,  Image, TextInput } from "./styles";
import { ImageUser, Styles } from "./styles.native";
import Seta from "../../assets/seta.png";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/perfil.jpg";
import { Alert } from "react-native";
import {CameraOptions, ImageLibraryOptions, launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useState } from "react";

export default function InformacaoProfissional(){

        // const [imageUser, setImageUser] = useState<string>(Logo);
        // const handleImgUser = () =>{
        //         Alert.alert(
        //                 "Selecione",
        //                 "Informe onde você vai pegar sua foto!",
        //                 [
        //                         {
        //                                 text: "Galeria",
        //                                 onPress: () => pickImageFromGalery(),
        //                                 style: "default"
        //                         },
        //                         {
        //                                 text: "Camera",
        //                                 onPress: () => pickImageFromCam(),
        //                                 style: "default"
        //                         }
        //                 ],
                        
        //                 {
        //                         cancelable: true,
        //                         onDismiss: () =>console.log('Deixa pra próxima')
        //                 }
                
        //         )
        // };

        // const pickImageFromGalery = async () => {

        //         const options: ImageLibraryOptions = {
        //                 mediaType: 'photo'
        //         }

        //         const result = await launchImageLibrary(options);
                
        //         if(result?.assets){
        //                 setImageUser(result.assets[0].uri!)
        //                 return
        //         }
        // };

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
                    <ImageUser>
                        <Image source={Avatar}></Image>
                    </ImageUser>
                    <View/>
                    <TextInput style={Styles.cardText} placeholder="Nome Usuário:"></TextInput>
                    <View/>
                    <TextInput placeholder="Número:"></TextInput>
                    <View/>
                    <TextInput placeholder="Endereço:"></TextInput>
                    {/* <View/> */}
                    {/* <TouchableOpacity>
                        <View style={Styles.viewStyle}>
                            <Image style={Styles.imageStyle} source={Seta}></Image>
                        </View>
                    </TouchableOpacity> */}
                </View>
        </Container>
);
}