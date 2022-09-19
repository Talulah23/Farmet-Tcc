import { Container, Text, Paragraph, View, Image, TextInput,  } from "./styles";
import { Styles, TouchableOpacity } from "./styles.native";
import { ScrollView } from 'react-native';
import Avatar from "../../assets/perfil.jpg";
import Plus from "../../assets/mais.png";
import Header from "../../assets/header.jpg";
import Star from "../../assets/star.png"
import { Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

export default function PerfilProfissional(){

        const [imageUser, setImageUser] = useState<string>();

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
                        <Image style={Styles.header} source={Header}></Image>
                        <Image style={Styles.imageAvatar} source={Avatar}></Image>
                        <Text style={Styles.infoName}>Livia Fonseca</Text>
                    </View>
                        <Text style={Styles.infoProf3}>Confeiteira</Text>
                        <Text style={Styles.infoProf3}>Contato:</Text>
                        <Text style={Styles.infoProf3}>Endereço:</Text>
                                <View style={Styles.viewAv}>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                        <Text style={Styles.infoHorario}>Horário de serviço:</Text>
                                </View>
                                <Text>Trabalhos</Text>
            </Container>
);
}