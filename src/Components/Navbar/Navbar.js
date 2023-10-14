import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { NavContainer, H2nav } from "./Navbar.styled";

export default function Navbar() {
    return (
        <NavContainer>
            <H2nav>Bailey Mejia</H2nav>
            <FontAwesomeIcon 
            style={{color: 'black'}} 
            icon={faBarsStaggered} 
            size="2xl" 
            />
        </NavContainer>
    )
}