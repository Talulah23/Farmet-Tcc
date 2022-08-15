import { Container, Text, View, Image, TouchableOpacity, } from "./styles";
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

export default function FeedUser(){
    // type SearchBarComponentProps = {};this: any
    // const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
    //     const [search, setSearch] = useState("");
        
    //     const updateSearch = (search: React.SetStateAction<string>) => {
    //       setSearch(search);
    //     };
    // }
    const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <ScrollView style={Styles.scrollStyle}>
            <Container>
                <ViewIcon>
                    <ScrollView
                    horizontal={true}>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Cake}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Marceneiro}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Chaveiro}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Manicure}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={TecInfo}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Baba}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Pintor}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Mecanico}></Image>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            // onPress={() => navigate.navigate('PerfilProfissional')}
                        >
                            <Image style={Styles.iconSize} source={Empregada}></Image>
                        </TouchableOpacity>
                    </ScrollView>
                </ViewIcon>
                <ScrollView
                style={Styles.scrollSize}
                horizontal={true}>
                    <View style={Styles.viewStyle}> 
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                onPress={() => navigate.navigate('PerfilProfissional')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil2}></Image>
                                <Text>Livia</Text>
                                    <Text style={Styles.infoProf3}>Gastronomia</Text>
                                <View style={Styles.viewAv}>
                                    <Text style={Styles.number}>4.5</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </View>
                                </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissional2')}
                            >
                                <Image style={Styles.ImageFeed2} source={ImagemProf2}></Image>
                            </TouchableOpacity>
                                <ViewAvatar style={Styles.viewAvatar}>
                                    <Image style={Styles.styleAvatar} source={Perfil}></Image>
                                    <Text>Melinda</Text>
                                    <Text style={Styles.infoProf2}>Confeitaria</Text>
                                    <View style={Styles.viewAv2}>
                                        <Text style={Styles.number}>4.2</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </View>
                                </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissionalEx')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                            </TouchableOpacity>
                                <ViewAvatar style={Styles.viewAvatar}>
                                    <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                    <Text>####</Text>
                                    <Text style={Styles.infoProf}>########</Text>
                                    <View style={Styles.viewAv2}>
                                        <Text style={Styles.number}>##</Text>
                                        <Image style={Styles.imageStar} source={Star}></Image>
                                    </View>
                                </ViewAvatar>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView
                style={Styles.scrollSize}
                horizontal={true}>
                    <View style={Styles.viewStyle}> 
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissional3')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf3}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil3}></Image>
                                <Text>Angel</Text>
                                <Text style={Styles.infoProf}>Manicure</Text>
                                <View style={Styles.viewAv3}>
                                    <Text style={Styles.number}>4.9</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissional4')}
                            >
                                <Image style={Styles.ImageFeed2} source={ImagemProf4}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil4}></Image>
                                <Text>Carmem</Text>
                                <Text style={Styles.infoProf2}>Manicure</Text>
                                <View style={Styles.viewAv3}>
                                    <Text style={Styles.number}>5.0</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissionalEx')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                <Text>####</Text>
                                <Text style={Styles.infoProf}>########</Text>
                                <View style={Styles.viewAv2}>
                                    <Text style={Styles.number}>##</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                    </View>
                </ScrollView>
                <ScrollView
                style={Styles.scrollSize}
                horizontal={true}>
                    <View style={Styles.viewStyle}> 
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissional5')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf5}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil5}></Image>
                                <Text>Roger</Text>
                                <Text style={Styles.infoProf}>Marcenaria</Text>
                                <View style={Styles.viewAv2}>
                                    <Text style={Styles.number}>3.9</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissional6')}
                            >
                                <Image style={Styles.ImageFeed2} source={ImagemProf6}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil6}></Image>
                                <Text>Roberto</Text>
                                <Text style={Styles.infoProf2}>Marcenaria</Text>
                                <View style={Styles.viewAv2}>
                                    <Text style={Styles.number}>4.0</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                        <View style={Styles.viewScroll}>
                            <TouchableOpacity 
                                // onPress={() => navigate.navigate('PerfilProfissionalEx')}
                            >
                                <Image style={Styles.ImageFeed} source={ImagemProf7}></Image>
                            </TouchableOpacity>
                            <ViewAvatar style={Styles.viewAvatar}>
                                <Image style={Styles.styleAvatar} source={Perfil7}></Image>
                                <Text>####</Text>
                                <Text style={Styles.infoProf}>########</Text>
                                <View style={Styles.viewAv2}>
                                    <Text style={Styles.number}>##</Text>
                                    <Image style={Styles.imageStar} source={Star}></Image>
                                </View>
                            </ViewAvatar>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        </ScrollView>
    );
}