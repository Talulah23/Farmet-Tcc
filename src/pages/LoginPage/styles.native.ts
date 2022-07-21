<<<<<<< HEAD
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: white;
`;

export const Container2 = styled.View`
    background-color: rgba(102,36,143,1);
    padding: 2px;
    margin-left: 15px;
    margin-right: 27px;
`

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

export const Button2 = styled.Button`
    border: none;
    border-radius: 5px;
    color: #007bff;
    font-weight: bold;
    padding: 10px;

    &.danger {
        background-color: #dc3545;
    }

    &.primary {
        background-color: #007bff;
    }
`;

export const Paragraph = styled.Text`
    padding: 0;
    line-height: inherit;
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
`;

export const TextInput = styled.TextInput`  
    border-radius: 30px;
    background-color: rgba(239,239,239,1);
    padding: 23px;
    width: 100%;
`;

export const View = styled.View``;

export const Touch = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
=======
import styled from "styled-components/native";

export const Container = styled.View`
    background-color: white;
`;

export const Container2 = styled.View`
    background-color: rgba(102,36,143,1);
    padding: 2px;
    margin-left: 15px;
    margin-right: 27px;
`

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

export const Button2 = styled.Button`
    border: none;
    border-radius: 5px;
    color: #007bff;
    font-weight: bold;
    padding: 10px;

    &.danger {
        background-color: #dc3545;
    }

    &.primary {
        background-color: #007bff;
    }
`;

export const Paragraph = styled.Text`
    padding: 0;
    line-height: inherit;
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
`;

export const TextInput = styled.TextInput`  
    border-radius: 30px;
    background-color: rgba(239,239,239,1);
    padding: 23px;
    width: 100%;
`;

export const View = styled.View``;

export const Touch = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.2
>>>>>>> main
}))