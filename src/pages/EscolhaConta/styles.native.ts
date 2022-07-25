import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: rgb(242 242 242);
`;

export const Styles = StyleSheet.create({
    cardContainer: {     
        width: 250,
        backgroundColor: '#e0e0e0',
        marginLeft: 475,
        marginTop: 100,
        height: 100,
        borderRadius: 20,
        border: 2,
        borderColor: '#66248F',
        // position: "absolute",
    },
    cardText: {
        marginLeft: 289,
        paddingTop: 29,
    },
});


export const Text = styled.Text`
    font-size: 20px;   
    margin-left: 24px;
    margin-top: 10px;
    color: black;
`;

export const Paragraph = styled.Text`
    padding: 0;
    line-height: inherit;
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
    padding-left: 71px;
`;

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))``;