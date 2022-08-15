import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #f2f2f2;
`;

export const View = styled.View`
    /* background-color: black;
    height: 100px;
    width: 200px;
    margin-top: 200px;
    margin-left: 570px */
`;

export const Styles = StyleSheet.create({
    cardContainer: {     
        width: 250,
        backgroundColor: '#aeaeae',
        marginLeft: 475,
        marginTop: 100,
        height: 100,
        borderRadius: 20,
    },
});

export const Text = styled.Text`
    font-size: 20px;   
    margin-left: 24px;
    margin-top: 10px;
    color: black;
`;

export const Touch = StyleSheet.create({
    cardButton: {
        heigth: 50,
        width: 100,
        activeOpacity: 0.3
    }
})
export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
    height: 50px;
    width: 100px;
    margin-left: 550px;
    margin-top: 400px;
    position: absolute;
    
`;
