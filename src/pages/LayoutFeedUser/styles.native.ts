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
        marginLeft: 0,
        marginRight: 16,
    },    
    ImageFeed2: {
        height: 133,
        width: 182,
        borderRadius: 10,
        marginLeft: 1,
        marginRight: 18,
    },
    scrollStyle: {
        backgroundColor: '#FFFFFF',
    },
    viewStyle: {
        marginLeft: 20,
        marginTop: 50,
        display: "flex",
        flexDirection: "row",
    },
    styleAvatar: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius: 10,
    },
    viewScroll: {
        marginLeft: 2,
    },
    scrollSize: {
        marginLeft: -10,
    },
    viewAvatar: {
        height: 60,
        width: 182,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
    },
    imageStar: {
        marginTop: 30,
        marginLeft: 3,
        height: 18,
        width: 18,

    },
    infoProf: {
        marginLeft: -35,
        marginTop: 25,
        fontSize: 10,
        color: '#000000',
        fontStyle: "normal",
    },
    infoProf2: {
        marginLeft: -55,
        marginTop: 25,
        fontSize: 10,
        color: '#000000',
        fontStyle: "normal",
    },
    number: {
        marginTop: 28,
        marginLeft: 10,
    },
    number2: {
        marginTop: 28,
        marginLeft: 10,
    },
    iconSize: {
        height: 35,
        width: 35,
        margin: 8,
        marginLeft: 15,
    },
});

export const Image = styled.Image`
`;

export const Text = styled.Text`
    font-size: 14px;   
    margin-left: 5px;
    margin-top: 3px;
    color: #000000;
    font-style: italic;
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
`;

export const ViewIcon = styled.View`
    height: 60px;
    width: 360px;
    background-color: #FFFFFF;
    margin-top: 30px;
    margin-left: 20px;
    border: 1px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    padding: 1px;
`;

export const ViewAvatar = styled.View`
    border: 0.3px;
    display: flex;
    flex-direction: row;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
`;