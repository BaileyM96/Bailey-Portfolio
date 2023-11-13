import { 
    AboutContainer, 
    Meimage, 
    Title, 
    AboutBody 
} from "./About.styled";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";




export default function About() {
    return(
        <AboutContainer>
            <Meimage src={process.env.PUBLIC_URL + '/images/Bailey-Portrait.JPG'} alt="Bailey Mejia"/>
            <Title>Bailey, Full-Stack Developer.</Title>
            <AboutBody>Hailing from the dynamic landscape of Los Angeles California, I'm Bailey Mejia a dedicated full-stack developer. My digital work includes HTML, CSS, JavaScript, MongoDB, and GraphQL.
            <br />
            <br />
            Beyond technical prowess, my adaptability and proactive approach are bolstered by keen communication and leadership abilities. Mastery over tools like React, Git, and GitHub ensures I seamlessly weave into and lead cross-functional collaborations.
            </AboutBody>
            
            {/* Show Project cards */}
            <Skills />
            <Projects />
        </AboutContainer>
    )
}