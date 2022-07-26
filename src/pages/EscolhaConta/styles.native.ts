import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: rgb(242 242 242);
    box-shadow: purple 12px 12px;
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
        marginLeft: 29,
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
    margin-left: 20px;
    margin-top: 10px;
    color: #ffffff;
`;

export const Paragraph = styled.Text`
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
    padding-left: 71px;
    margin-right: 40px;
`;

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    margin-left: 170px;
    background-color: #66248F;
    border-radius: 50px;
    width: 59px;
    height: 32px;
    margin-top: -20px;
`;