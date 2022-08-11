import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    height: 100%;
`;

export const Styles = StyleSheet.create({
    cardText: {
        marginTop: 10,
    },
    cardColor: {
        color: "black",
    },
    imageStyle: {
        height: 70,
        width: 100,
        marginTop: 0,
        fontSize: 22,
    },
    viewStyle: {
        width: 300,
        height: 60,
        marginTop: 14,
        marginLeft: 92,
    },
    buttonColor: {
        width: 35,
        height: 35,
        borderRadius: 67,
        marginLeft: 78,
        marginTop: -28,
    },
    imageAvatar: {
        borderWidth: 1.5,
    },
});

export const Text = styled.Text`
    font-size: 16px;   
    margin-left: 4%;
    margin-top: 1%;
    color: #ffffff;
`;

export const Paragraph = styled.Text`
    color: rgba(112, 8, 143, 1);
    border-radius: 16px;
    padding-left: 8%;
    margin-right: 40px;
    margin-top: 4%;
    font-size: 18px;
`;

export const TextInput = styled.TextInput`  
    border-radius: 15px;
    background-color: #EFEFEF;
    padding: 20px;
    width: 300px;
    height: 60px;
    margin-left: 12%;
    border-color: #545454;
    font-size: 16px;

    ::placeholder {
        color: black;
    }
`;

export const Image = styled.Image`
    border-radius: 67px;
    height: 120px;
    margin-left: 0px;
    margin-top: 0px;
    width: 120px;
`;

export const View = styled.View`
    height: 20%;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    margin-left: 12%;
    background-color: #66248F;
    border-radius: 20px;
    width: 300px;
    height: 60px;
    margin-top: 5%;
`;

export const ImageUser = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    background-color: black;
    height: 120px;
    width: 120px;
    margin-left: 34%;
    margin-top: 44px;
    border-radius: 67px; 
`;

export const AddImageUser = styled.Image`
    height: 30px;
    width: 30px;
    margin-left: 50%;
    margin-top: 44px;
    border-radius: 67px; 
`;
