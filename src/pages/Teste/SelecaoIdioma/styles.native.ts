import styled from "styled-components/native";

export const Container = styled.View`
    background-color: #8DC5D7;
`;

export const Text = styled.Text`
`;
export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))`
    background-color: #199FCA;
    font-size: 30px;
    height: 60px;
    width: 100px;
    margin-left: 550px;
`;
// export const Button = styled.Button`
//     background-color: #199FCA;
//     font-size: 200px,
// `;

