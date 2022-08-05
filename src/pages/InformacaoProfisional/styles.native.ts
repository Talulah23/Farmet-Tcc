import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    height: 100%;
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
        marginLeft: 6,
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
    padding: 23px;
    width: 76%;
    height: 30%;
    margin-left: 12%;
    border-color: #545454;
    font-size: 16px;

    ::placeholder {
        color: black;
    }
`;

export const Image = styled.Image`
    border-radius: 67px;
    height: 110px;
    margin-left: 1px;
    margin-top: 1px;
    width: 110px;
`;

export const View = styled.View`
    height: 20%;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    background-color: #66248F;
    height: 50px;
    width: 300px;
    margin-left: 12%;
    margin-top: 100px;
    /* position: absolute; */
    border-radius: 30px;
`;

// export const ImageUser = styled.TouchableOpacity.attrs(() => ({
//     activeOpacity: 0.6
// }))`
//     background-color: black;
//     height: 112px;
//     width: 112px;
//     margin-left: 32%;
//     margin-top: 44px;
//     /* position: absolute; */
//     border-radius: 67px;
// `;