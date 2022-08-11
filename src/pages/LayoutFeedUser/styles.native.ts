import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
`;

export const Styles = StyleSheet.create({
    ImageFeed: {
        height: 133,
        width: 182,
        borderRadius: 10,
    },
    scrollStyle: {
        backgroundColor: '#FFFFFF',
    },
    viewStyle: {
        marginLeft: 20,
        marginTop: 50,
    },    
    ImageFeed2: {
        height: 133,
        width: 182,
        borderRadius: 10,
        marginLeft: 15,
    },
    infoProf: {
        height: 50,
        width: 182,
        backgroundColor: '#EBEBEB',
        marginLeft: 20,
        marginTop: 0,
        borderRadius: 10,
    },
    styleAvatar: {
        height: 40,
        width: 40,
        margin: 5,
        borderRadius: 10,
    },
    viewScroll: {
        marginLeft: 0,
    },
});

export const Image = styled.Image`
`;

export const Text = styled.Text`
    font-size: 16px;   
    margin-left: 20px;
    margin-top: 10px;
    color: #ffffff;
`;

export const TextInput = styled.TextInput` 
`;

export const Paragraph = styled.Text`
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
    padding-left: 71px;
    margin-right: 40px;
`;

export const View = styled.View`
    display: flex;
    flex-direction:row;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
`;