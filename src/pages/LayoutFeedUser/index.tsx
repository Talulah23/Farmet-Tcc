import { Container, Text, Paragraph, View, TouchableOpacity, Image, TextInput } from "./styles";
import React, { useState } from 'react';
import { Styles } from "./styles.native";
import { SearchBar } from "@rneui/themed";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "routes/types";


// const navigate = useNavigation<NativeStackNavigationProp<RootStackParamList>>()


export default function FeedUser(this: any){
    type SearchBarComponentProps = {};
    const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
        const [search, setSearch] = useState("");
        
        const updateSearch = (search: React.SetStateAction<string>) => {
          setSearch(search);
        };
    }

    return (
        
            <Container>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={SwitchComponent}
                     />
            </Container>
        
    //  <TouchableOpacity onPress={() => navigate.navigate('PerfilProfisional')}>
    //  <Image source={Seta}></Image>
    //  </TouchableOpacity>
);
}