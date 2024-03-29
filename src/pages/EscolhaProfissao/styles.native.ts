import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
`;

export const Styles = StyleSheet.create({
    cardContainer: {     
        width: 340,
        backgroundColor: '#e0e0e0',
        marginLeft: 40,
        marginTop: 100,
        height: 500,
        borderRadius: 25,
        border: 2,
        borderColor: 'black',
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
  checkboxContainer: {
    flexDirection: "row",
    marginLeft: 10,
    marginTop: 40,
    },
    buttonColor: {
        width: 35,
        height: 35,
        borderRadius: 67,
        marginLeft: 262,
        marginTop: -16,
    },
    imageSize: {
        width: 20,
        height: 20,
        marginTop: -45,
        marginLeft: 12, 
    },
    boxSearch: {
        height: 65,
        width: 60,
    },
    textButton: {
        marginTop: 15,
        marginLeft: 110,
        fontSize: 22,
        color: "#ffffff",
    },
});

export const Image = styled.Image`
    height: 67.9%;
    width: 68.8%;
    margin-left: 15%;
    margin-top: 15%;
`;

export const Text = styled.Text`
    font-size: 16px;   
    margin-left: 15%;
    margin-top: -29px;
    color: #898888;
`;

export const TextInput = styled.TextInput`  
    border-radius: 20px;
    background-color: #EFEFEF;
    padding: 23px;
    width: 320px;
    height: 65px;
    margin-left: 10%;
    border: 0.5px;
    border-color: #545454;
    margin-top: 50px;
    font-size: 16px;
`;

export const Paragraph = styled.Text`
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
    padding-left: 71px;
    margin-right: 40px;
`;

export const View = styled.View`
    width: 310px;
    background-color: #FFFFFF;
    margin-left: 48px;
    margin-top: 100px;
    height: 500px;
    border-radius: 25px;
    border: 2px;
    border-color: #66248F;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.4
}))`
    margin-left: 12%;
    background-color: #66248F;
    border-radius: 20px;
    width: 310px;
    height: 70px;
    margin-top: 10%;
`;

