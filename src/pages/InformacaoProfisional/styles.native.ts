import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    height: 100%;
`;

export const Styles = StyleSheet.create({
    cardContainer: {     
        width: 250,
        backgroundColor: '#e0e0e0',
        marginLeft: 75,
        marginTop: 100,
        height: 115,
        borderRadius: 25,
        border: 2,
        borderColor: '#66248F',
    },
    cardText: {
        marginTop: 10,
    },
    cardColor: {
        color: "black",
    },
    imageStyle: {
        height: 28.2,
        width: 28,
        marginLeft: 6,
        marginTop: 6,
    },
    buttonColor: {
        height: 40,
        width: 40,
        marginLeft: 272,
        marginTop: 370,
        borderRadius: 50,
    },
});

export const Text = styled.Text`
    font-size: 16px;   
    margin-left: 4%;
    margin-top: 1%;
    color: #ffffff;
`;

export const Paragraph = styled.Text`
    color: white;
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
    height: 171px;
    width: 175px;
    margin-left: 28%;
    margin-top: 10%;
    border-radius: 100px;
`;

export const View = styled.View`
    margin-top: 12px;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    background-color: #66248F;
    height: 50px;
    width: 300px;
    margin-left: 12%;
    border-radius: 30px;
`;
