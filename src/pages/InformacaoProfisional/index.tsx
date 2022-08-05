import { Container, Text, Paragraph, View, Image, TextInput,  } from "./styles";
import { ImageUser, Styles, TouchableOpacity } from "./styles.native";
import Seta from "../../assets/arrow.png";
import Avatar from "../../assets/perfil.jpg";
import Plus from "../../assets/mais.png";
import { Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function InformacaoProfissional(){

        const [imageUser, setImageUser] = useState<string>();

        const pickImageFromGalery = async () => {
                const permissionResult = await ImagePicker.getMediaLibraryPermissionsAsync()

                if (permissionResult.granted === false){
                    await ImagePicker.requestMediaLibraryPermissionsAsync()
                }

                const result = await ImagePicker.launchImageLibraryAsync({
                        mediaTypes: ImagePicker.MediaTypeOptions.All,
                        allowsEditing: true,
                        aspect: [4, 3],
                        quality: 1,
                      });
                
                console.log(result);

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
                <ImageUser onPress={pickImageFromGalery}>
                    <Image style={Styles.imageAvatar} source={imageUser === undefined ? Avatar : {uri: imageUser}}></Image>
                    <Image style={Styles.buttonColor} source={Plus}></Image>
                </ImageUser>
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
