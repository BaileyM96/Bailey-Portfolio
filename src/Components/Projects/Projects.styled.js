import styled from "styled-components";
import { device } from "../../breakpoints";


export const ProjectContainer = styled.section`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
padding-top: 70px;
`;

export const ProjectCards = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 30px;
padding-bottom: 30px;
flex-wrap: wrap;

//Tablet
@media ${device.tablet} {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

//Desktop
@media ${device.desktop} {
    flex-direction: row;
    justify-content: space-evenly;
}
`;

export const ProjectHeader = styled.h2`
color: black;
font-weight: bolder;
`;