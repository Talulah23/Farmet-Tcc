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
    height: 40,
    width: 40,
    marginLeft: 272,
    marginTop: 370,
    borderRadius: 50,
    },
    imageSize: {
        width: 20,
        height: 20,
    }

});

export const Image = styled.Image`
    height: 67.9%;
    width: 68.8%;
    margin-left: 15%;
    margin-top: 15%;
`;

export const Text = styled.Text`
    font-size: 16px;   
    margin-left: 20px;
    margin-top: 10px;
    color: #ffffff;
`;

export const TextInput = styled.TextInput`  
    border-radius: 20px;
    background-color: #EFEFEF;
    padding: 23px;
    width: 320px;
    height: 60px;
    margin-left: 10%;
    border: 0.5px;
    border-color: #545454;
    margin-top: 50px;
`;

export const Paragraph = styled.Text`
    color: rgba(112, 8, 143, 1);
    border-radius: 20px;
    padding-left: 71px;
    margin-right: 40px;
`;

export const View = styled.View`
    width: 330px;
    background-color: #FFFFFF;
    margin-left: 32px;
    margin-top: 100px;
    height: 500px;
    border-radius: 25px;
    border: 2px;
    border-color: #66248F;
`;

export const TouchableOpacity = styled.TouchableOpacity.attrs(() => ({
    activeOpacity: 0.6
}))`
    background-color: #66248F;
`;