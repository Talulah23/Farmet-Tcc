import styled from "styled-components/native";

export const Container = styled.View`
    background-color: rgb(242 242 242);
    width: 100%;
`;



export const Paragraph = styled.Text`
    margin-left: 120px;
    margin-top: 10px;
    font-size: 19px;
    color: white;
    border-radius: 20px;
`;

export const Text = styled.Text`
    margin-left: 80px;
    margin-top: 15px;
    color: #66248F;
`;

export const TextInput = styled.TextInput`  
    border-radius: 40px;
    background-color: #EFEFEF;
    padding: 23px;
    width: 300px;
    height: 70px;
    margin-left: 65px;
    border: 2px;
    border-color: #943DCA;
`;

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #66248F;
    height: 50px;
    width: 300px;
    margin-left: 65px;
    margin-top: 300px;
    position: absolute;
    border-radius: 30px;
`;
