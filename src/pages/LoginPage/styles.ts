import styled, { css } from "styled-components";
import {
    Container as ContainerNative,
    Paragraph as ParagraphNative,
    Button as ButtonNative,
    View as ViewNative,
} from './styleslogin.native';

export const Container = ContainerNative;

export const Container2 = ContainerNative;

export const Paragraph = ParagraphNative;

export const Button = ButtonNative;

export const View = ViewNative;

export const TextInput = styled.input`
    width: 90%;
    font-size: 30px;
    background-color: #333;
    border-radius: 15px;
    padding: 10px;
    color: white;
    margin-top: 10px;
`;