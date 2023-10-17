import styled from "styled-components";
import { device } from "../../breakpoints";

export const AboutContainer = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 30px;

@media ${device.tablet} {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

@media ${device.desktop} {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
`;

export const Meimage = styled.img`
border-radius: 50%;
overflow: hidden;
width: 250px;
height: 250px;
object-fit: cover;
`;

export const Title = styled.h2`
color: black;
font-weight: bolder;
`;

export const AboutBody = styled.p`
width: 80%;
line-height: 25px;
`;



