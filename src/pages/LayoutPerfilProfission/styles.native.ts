import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    height: 100%;
`;

export const Styles = StyleSheet.create({
    buttonColor: {
        width: 35,
        height: 35,
        borderRadius: 67,
        marginLeft: 78,
        marginTop: -28,
    },
    imageAvatar: {
        borderWidth: 1.5,
        borderRadius: 67,
        height: 120,
        width: 120,
        marginLeft: 40,
        marginTop: -60,
    },
    scrollStyle: {
        backgroundColor: '#FFFFFF',
    },
    header: {
        height: 130,
        width: 350,
        marginLeft: 30,
        marginTop: 30,
        borderColor: '#ffffff',
    },
    number: {
        marginTop: 30,
        marginLeft: 10,
        fontSize: 13,
        color: '#000000',
    },
    imageStar: {
        marginTop: -20,
        marginLeft: 33,
        height: 20,
        width: 20,
        borderColor: '#ffffff',
    },
    viewAv: {
        marginLeft: 320,
        marginTop: -268,
    },
    infoProf3: {
        marginLeft: 58,
        marginTop: 50,
        fontSize: 15,
        color: '#000000',
        fontStyle: "normal",
    },
    infoName: {
        marginLeft: 180,
        marginTop: -55,
        fontSize: 15,
        color: '#000000',
        fontStyle: "italic",
    },
    infoHorario: {
        marginLeft: -90,
        marginTop: 60,
        fontSize: 15,
        color: '#000000',
        fontStyle: "normal",
    },
});

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

export const TextInput = styled.TextInput`  
    border-radius: 15px;
    background-color: #EFEFEF;
    padding: 20px;
    width: 300px;
    height: 60px;
    margin-left: 12%;
    border-color: #545454;
    font-size: 16px;

    ::placeholder {
        color: black;
    }
`;

export const Image = styled.Image`
    border: 1px;
    border-color: #EE79BF;
`;

export const View = styled.View`
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    margin-left: 12%;
    background-color: #66248F;
    border-radius: 20px;
    width: 300px;
    height: 60px;
    margin-top: 5%;
`;

// export const ImageUser = styled.TouchableOpacity.attrs(() => ({
//     activeOpacity: 0.6
// }))`
//     background-color: black;
//     height: 120px;
//     width: 120px;
//     margin-left: 34%;
//     margin-top: 44px;
//     border-radius: 67px; 
// `;

export const AddImageUser = styled.Image`
    height: 30px;
    width: 30px;
    margin-left: 50%;
    margin-top: 44px;
    border-radius: 67px; 
`;
