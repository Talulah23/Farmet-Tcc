import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #f2f2f2;
    width: 100%;
`;

export const Image = styled.Image`
    height: 171px;
    width: 175px;
    margin-left: 28%;
    margin-top: 10%;
`;

export const Paragraph = styled.Text`
    margin-left: 120px;
    margin-top: 10px;
    font-size: 19px;
    color: white;
    border-radius: 20px;
`;

export const Text = styled.Text`
    margin-left: 70px;
    margin-top: 15px;
    color: #66248F;
    font-size: 18px;
    padding: 10px;
`;

export const TextInput = styled.TextInput`  
    border-radius: 40px;
    background-color: #EFEFEF;
    padding: 23px;
    width: 300px;
    height: 70px;
    margin-left: 55px;
    border: 1px;
    border-color: #943DCA;
`;

export const Styles = StyleSheet.create({
    inputTextColor: {

    },
});

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
    height: 50px;
    width: 300px;
    margin-left: 55px;
    margin-top: 100px;
    /* position: absolute; */
    border-radius: 30px;
`;
