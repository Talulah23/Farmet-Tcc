import styled from "styled-components/native";

export const Container = styled.View`
    background-color: white;
`;

export const Button = styled.Button`
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: bold;
    padding: 10px;

    &.danger {
        background-color: #dc3545;
    }

    &.primary {
        background-color: #007bff;
    }
`;


export const Text = styled.Text`
`

export const Paragraph = styled.Text`
    padding: 0;
    line-height: inherit;
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
`;

export const View = styled.View``;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
}))``;