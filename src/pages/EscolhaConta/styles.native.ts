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
        height: 20,
    },
});

export const Image = styled.Image`
    height: 31px;
    width: 35px;
    margin-left: 11px;
`;

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

export const View = styled.View`
    width: 80%;
    background-color: #FFFFFF;
    margin-left: 10%;
    margin-top: 20%;
    height: 27%;
    border-radius: 25px;
    border: 1px;
    border-color: black;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    margin-left: 75%;
    background-color: #66248F;
    border-radius: 50px;
    width: 59px;
    height: 32px;
    margin-top: 5%;
`;