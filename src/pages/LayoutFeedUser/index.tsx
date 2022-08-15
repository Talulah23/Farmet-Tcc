import { Container, Text, View, Image, } from "./styles";
import React, { useState } from 'react';
import { Styles, ViewAvatar, ViewIcon} from "./styles.native";
import { SearchBar } from "@rneui/themed";
import ImagemProf from "../../assets/massa.jpg"
import ImagemProf2 from "../../assets/confeitaria.jpg"
import ImagemProf3 from "../../assets/icon/manicure.webp"
import ImagemProf4 from "../../assets/icon/manicure2.png"
import ImagemProf5 from "../../assets/icon/Imagemfundo.jpeg"
import ImagemProf6 from "../../assets/icon/marceneiro2.webp"
import ImagemProf7 from "../../assets/exemplo.png"
import Perfil from "../../assets/perfil.jpg"
import Perfil2 from "../../assets/perfil2.jpg"
import Perfil3 from "../../assets/icon/avatarmanicure.png"
import Perfil4 from "../../assets/icon/avatarmanicure2.webp"
import Perfil5 from "../../assets/icon/marceneiroavatar.jpg"
import Perfil6 from "../../assets/icon/marceneiroavatar2.jpg"
import Perfil7 from "../../assets/user.png"
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
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                        <Text>####</Text>
                                        <Text style={Styles.infoProf}>########</Text>
                                        <Text style={Styles.number}>##</Text>
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
                                <Image style={Styles.ImageFeed} source={ImagemProf3}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil3}></Image>
                                        <Text>angel</Text>
                                        <Text style={Styles.infoProf}>Manicure</Text>
                                        <Text style={Styles.number}>4.9</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf4}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil4}></Image>
                                        <Text>Carmem</Text>
                                        <Text style={Styles.infoProf2}>Manicure</Text>
                                        <Text style={Styles.number}>5.0</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                        <Text>####</Text>
                                        <Text style={Styles.infoProf}>########</Text>
                                        <Text style={Styles.number}>##</Text>
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
                                <Image style={Styles.ImageFeed} source={ImagemProf5}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil5}></Image>
                                        <Text>Roger</Text>
                                        <Text style={Styles.infoProf}>Marcenaria</Text>
                                        <Text style={Styles.number}>3.9</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed2} source={ImagemProf6}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil6}></Image>
                                        <Text>Roberto</Text>
                                        <Text style={Styles.infoProf2}>Marcenaria</Text>
                                        <Text style={Styles.number}>4.0</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </ViewAvatar>
                            </View>
                            <View style={Styles.viewScroll}>
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                                    <ViewAvatar style={Styles.viewAvatar}>
                                        <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                        <Text>####</Text>
                                        <Text style={Styles.infoProf}>########</Text>
                                        <Text style={Styles.number}>##</Text>
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