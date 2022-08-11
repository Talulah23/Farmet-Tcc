import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import { Styles } from "./styles.native";
import { SearchBar } from "@rneui/themed";
import ImagemProf from "../../assets/massa.jpg"
import ImagemProf2 from "../../assets/confeitaria.jpg"
import Perfil from "../../assets/perfil.jpg"
import Perfil2 from "../../assets/perfil2.jpg"
import { ScrollView } from 'react-native';
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";


// const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


export default function FeedUser(){
    // type SearchBarComponentProps = {};this: any
    // const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
    //     const [search, setSearch] = useState("");
        
    //     const updateSearch = (search: React.SetStateAction<string>) => {
    //       setSearch(search);
    //     };
    // }

    return (
            <ScrollView style={Styles.scrollStyle}>
                <Container>
                    <ScrollView
                    horizontal={true}>
                        <View style={Styles.viewStyle}> 
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                {/* <Image style={Styles.styleAvatar} source={Perfil2}></Image> */}
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                            </View>
                            <View style={Styles.viewScroll}>
                            <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                            </View>
                        </View>
                    </ScrollView>
                    {/* <View style={Styles.infoProf}>
                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                    </View> */}
                    {/* <View style={Styles.viewStyle}>
                        <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                    </View>
                    <View style={Styles.viewStyle}>
                        <Image style={Styles.ImageFeed2} source={ImagemProf}></Image>
                    </View>
                    <View style={Styles.viewStyle}>
                        <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                    </View> */}
                </Container>
            </ScrollView>
        
    //  <TouchableOpacity onPress={() => navigate.navigate('PerfilProfisional')}>
    //  <Image source={Seta}></Image>
    //  </TouchableOpacity>
);
}