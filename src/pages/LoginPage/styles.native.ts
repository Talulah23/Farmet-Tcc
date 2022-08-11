import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
`;

export const Image = styled.Image`
`;

export const Paragraph = styled.Text`
    margin-left: 42%;
    margin-top: 10px;
    font-size: 19px;
    color: white;
    border-radius: 20px;
`;

export const Text = styled.Text`
    margin-left: 18%;
    margin-top: 15px;
    color: #66248F;
    font-size: 18px;
    padding: 3%;
`;

export const TextInput = styled.TextInput`  
    border-radius: 40px;
    background-color: #EFEFEF;
    padding: 23px;
    width: 300px;
    height: 65px;
    margin-left: 12%;
    border: 0.5px;
    border-color: #545454;
    font-size: 16px;

    ::placeholder {
        color: "#66248F";
    }
`;

export const Styles = StyleSheet.create({
    buttonColor: {
        height: 50,
        width: 50,
        marginLeft: 180,
        marginTop: 2,
        backgroudColor: "#FFFFFF",
        activeOpacity: 0,
    },
    imageGoogle: {
        height: 80,
        width: 80,
        marginLeft: -15,
        marginTop: -15,
    },
    textFontColor: {
        color: "#898888",
        marginLeft: 118,
        fontSize: 16,
    },
    inputColor: {
        color: "#ACACAC",
        fontSize: 12,
    },
    scrollStyle: {
        backgroundColor: '#FFFFFF',
    },
    logo: {
        height: 200,
        width: 204,
        marginLeft: 100,
    },
});

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
    height: 50px;
    width: 300px;
    margin-left: 12%;
    margin-top: 100px;
    border-radius: 30px;
`;
