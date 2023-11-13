import { SkillsContainer, SkillsHeader } from "./Skills.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faJs, faNode, faReact } from "@fortawesome/free-brands-svg-icons";




export default function Skills() {

    return(
        <>
        <SkillsHeader>
            <h2>Skills</h2>
        </SkillsHeader>

        <SkillsContainer>
            <FontAwesomeIcon icon={faHtml5} size="6x"/>
            <FontAwesomeIcon icon={faCss3Alt} size="6x"/>
            <FontAwesomeIcon icon={faJs} size="6x"/>
            <FontAwesomeIcon icon={faNode} size="6x"/>
            <FontAwesomeIcon icon={faReact} size="6x"/>
        </SkillsContainer>
        </>
    )
}