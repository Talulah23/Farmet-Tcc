import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import { Styles, ViewAvatar, ViewIcon} from "./styles.native";
import { SearchBar } from "@rneui/themed";
import ImagemProf2 from "../../assets/confeitaria.jpg"
import ImagemProf from "../../assets/massa.jpg"
import Perfil from "../../assets/perfil.jpg"
import Perfil2 from "../../assets/perfil2.jpg"
import Star from "../../assets/star.png"
import Cake from "../../assets/icon/cake.png"
import Marceneiro from "../../assets/icon/hammer.png"
import Manicure from "../../assets/icon/manicure.png"
import Mecanico from "../../assets/icon/mecanico.png"
import TecInfo from "../../assets/icon/tecinfo.png"
import Chaveiro from "../../assets/icon/chaveiro.png"
import Baba from "../../assets/icon/bebe.png"
import Pintor from "../../assets/icon/pincel.png"
import Empregada from "../../assets/icon/empregada.png"
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
                    <ViewIcon>
                        <ScrollView
                        horizontal={true}>
                            <Image style={Styles.iconSize} source={Cake}></Image>
                            <Image style={Styles.iconSize} source={Marceneiro}></Image>
                            <Image style={Styles.iconSize} source={Chaveiro}></Image>
                            <Image style={Styles.iconSize} source={Manicure}></Image>
                            <Image style={Styles.iconSize} source={TecInfo}></Image>
                            <Image style={Styles.iconSize} source={Baba}></Image>
                            <Image style={Styles.iconSize} source={Pintor}></Image>
                            <Image style={Styles.iconSize} source={Mecanico}></Image>
                            <Image style={Styles.iconSize} source={Empregada}></Image>
                        </ScrollView>
                    </ViewIcon>
                    <ScrollView
                    style={Styles.scrollSize}
                    horizontal={true}>
                        <View style={Styles.viewStyle}> 
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil}></Image>
                                        <Text>Melinda</Text>
                                        <Text style={Styles.infoProf2}>Confeitaria</Text>
                                        <Text style={Styles.number}>4.2</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView
                    style={Styles.scrollSize}
                    horizontal={true}>
                        <View style={Styles.viewStyle}> 
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil}></Image>
                                        <Text>Melinda</Text>
                                        <Text style={Styles.infoProf2}>Confeitaria</Text>
                                        <Text style={Styles.number}>4.2</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView
                    style={Styles.scrollSize}
                    horizontal={true}>
                        <View style={Styles.viewStyle}> 
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil}></Image>
                                        <Text>Melinda</Text>
                                        <Text style={Styles.infoProf2}>Confeitaria</Text>
                                        <Text style={Styles.number}>4.2</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                        </View>
                    </ScrollView>
                    <ScrollView
                    style={Styles.scrollSize}
                    horizontal={true}>
                        <View style={Styles.viewStyle}> 
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil}></Image>
                                        <Text>Melinda</Text>
                                        <Text style={Styles.infoProf2}>Confeitaria</Text>
                                        <Text style={Styles.number}>4.2</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                        <Text>Livia</Text>
                                        <Text style={Styles.infoProf}>Gastronomia</Text>
                                        <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                        </View>
                    </ScrollView>
                </Container>
            </ScrollView>
        
    //  <TouchableOpacity onPress={() => navigate.navigate('PerfilProfisional')}>
    //  <Image source={Seta}></Image>
    //  </TouchableOpacity>
);
}