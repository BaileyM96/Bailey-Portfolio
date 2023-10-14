import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { NavContainer, H1nav } from "./Navbar.styled";

export default function Navbar() {
    return (
        <NavContainer>
            <H1nav>BM</H1nav>
            <FontAwesomeIcon 
            style={{color: 'black'}} 
            icon={faBarsStaggered} 
            size="2xl" 
            />
        </NavContainer>
    )
}