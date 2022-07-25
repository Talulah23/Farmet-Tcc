import styled from "styled-components/native";

export const Container = styled.View`
    background-color: rgb(242 242 242);
    width: 100%;
`;



export const Paragraph = styled.Text`
    margin-left: 30px;
    margin-top: 10px;
    font-size: 19px;
    color: white;
    border-radius: 20px;
`;

export const Text = styled.Text`
    margin-left: 380px;
    margin-top: 15px;
`;

export const TextInput = styled.TextInput`  
    border-radius: 30px;
    background-color: #fff;
    padding: 23px;
    width: 450px;
    margin-left: 400px;
    border: 2px;
    border-color: #66248F;
`;

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
    height: 50px;
    width: 100px;
    margin-left: 550px;
    margin-top: 400px;
    position: absolute;
    border-radius: 10px;
`;
