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
        marginLeft: 6,
        paddingTop: 29,
        fontSize: 15,
    },
    cardColor: {
        color: "black",
    },
    imageStyle: {
        height: 31,
        width: 35,
        marginLeft: 50, 
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
    padding: 23px;
    width: 76%;
    height: 30%;
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

