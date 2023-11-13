import { ProjectContainer, ProjectHeader, ProjectCards } from "./Projects.styled";
import { Card, Image } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function Projects() {
    return(
    <>
                <ProjectContainer>
                    <ProjectHeader>Projects</ProjectHeader>
                </ProjectContainer>

                <ProjectCards>
                    <Card>
                        <Card.Content>  
                            <Card.Header>Highest Good Network</Card.Header>
                            <Card.Meta>Software Developer & Manager-in-Training</Card.Meta>
                            <Card.Description>
                                A labor tracking software.
                            </Card.Description>
                            <Image src={process.env.PUBLIC_URL + '/images/one_community_global_logo.jpeg'}
                            size="small"
                            />

                            <Card.Description 
                            textAlign="left" 
                            style={{ fontWeight: 'bolder', padding: '0px 0px 10px'}}>Team Size:  
                            <span style={{fontWeight: 'normal'}}> 103</span>
                            </Card.Description>

                            <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >Tech-Stack: 
                            <span style={{ fontWeight: 'normal'}}> MongoDB, Express.js, React.js, Node.js.</span>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder', padding: '0 0 10px'}}
                            >What I worked on:</Card.Description>
                                <Card.Description textAlign="left">
                                    
                                        <li>Led testing for the badge functionality to find new/unresolved bugs. </li>
                                        <li>Fixed UI design bugs on the front-end.</li>
                                        <li>Currently fixing a duplication bug on the back-end.</li>
                                        <li>Fixing loading speeds for the user tasks menu on the dashboard.</li>
                                        <li>Do final reviews on PRs as part of the PR review leadership.</li>
                                    
                                </Card.Description>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>Overwatch Counter Pick</Card.Header>
                            <Card.Meta>Lead front-end developer</Card.Meta>
                            <Card.Description style={{ padding: '0 0 10px'}}>
                            Overwatch match-winning counter.
                            </Card.Description>
                            <Image 
                             src={process.env.PUBLIC_URL + '/images/Overwatch_circle_logo.svg.png'}
                            size="small"
                            />

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder', padding: '10px 0 10px'}}
                            >Team Size: <span style={{fontWeight: 'normal'}}> 2</span>
                            </Card.Description>

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >Tech-Stack: <span style={{fontWeight: 'normal'}}> React.js, Node.js</span>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >What I worked on:</Card.Description>
                            <Card.Description textAlign="left">
                                <li>Led front-end development.</li>
                                <li>Worked on the counter logic for selecting characters.</li>
                                <li>Used react-router-dom to navigate to different character class screens.</li>
                                <li>Collaborated with the UI designer.</li>
                                <li>Packaged the software to be used on Heroku.</li>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign="left">
                            <a  href="https://github.com/BaileyM96/Overwatch-Counter-Pick">
                                <FontAwesomeIcon icon={faGithub} size="2x" pull="left"/>
                            </a>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>React Weather Program</Card.Header>
                            <Card.Meta>Front-end developer</Card.Meta>
                            <Card.Description>
                            All-location weather app.
                            </Card.Description>
                            <Image 
                             src={process.env.PUBLIC_URL + '/images/Clouds.png'}
                            size="small"
                            />

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder', padding: '10px 0 10px'}}
                            >Team Size: <span style={{fontWeight: 'normal'}}> 1</span>
                            </Card.Description>

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >Tech-Stack: <span style={{fontWeight: 'normal'}}> React.js, Node.js</span>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >What I worked on:
                        </Card.Description>
                            <Card.Description textAlign="left">
                                <li>Worked on the Front end of the site.</li>
                                <li>Integrated the open weather api.</li>
                                <li>Created multiple components and integrated city search.</li>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign="left">
                            <a  href="https://github.com/BaileyM96/React-Weather-program">
                                <FontAwesomeIcon icon={faGithub} size="2x" pull="left"/>
                            </a>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>Love.Dev</Card.Header>
                            <Card.Meta>Lead front-end developer</Card.Meta>
                            <Card.Description style={{ padding: '0 0 10px'}}>
                                A dating app for developers by developers!
                            </Card.Description>
                            <Image 
                             src={process.env.PUBLIC_URL + '/images/LOVE DEV logo.png'}
                            size="small"
                            />

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder', padding: '10px 0 10px'}}
                            >Team Size: <span style={{fontWeight: 'normal'}}> 5</span>
                            </Card.Description>

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >Tech-Stack: <span style={{fontWeight: 'normal'}}> MongoDB, Express.js, React.js, Node.js</span>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >What I worked on:
                        </Card.Description>
                            <Card.Description textAlign="left">
                                <li>Led front-end development, and collaborated with back-end developers to ensure data was correct on the client interface.</li>
                                <li>Collaborated with our UI designer to implement designs.</li>
                                <li>In charge of version control with git.</li>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign="left">
                            <a  href="https://github.com/BaileyM96/Love.Dev">
                                <FontAwesomeIcon icon={faGithub} size="2x" pull="left"/>
                            </a>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>BURNT</Card.Header>
                            <Card.Meta>Lead front-end developer</Card.Meta>
                            <Card.Description style={{ padding: '0 0 10px'}}>
                            Figure out the best workout plan that fits your lifestyle.
                            </Card.Description>
                            <Image 
                             src={process.env.PUBLIC_URL + '/images/Burnt_adobe_express.svg'}
                            size="small"
                            />

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder', padding: '10px 0 10px'}}
                            >Team Size: <span style={{fontWeight: 'normal'}}> 5</span>
                            </Card.Description>

                            <Card.Description
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >Tech-Stack: <span style={{fontWeight: 'normal'}}> HTML, CSS, JavaScript</span>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        <Card.Description 
                            textAlign="left"
                            style={{ fontWeight: 'bolder'}}
                            >What I worked on:
                        </Card.Description>
                            <Card.Description textAlign="left">
                                <li>Led front-end design</li>
                                <li>Ensured all designs were consistant accross the whole website.</li>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra textAlign="left">
                            <a  href="https://github.com/Czaldivar419/BURNT">
                                <FontAwesomeIcon icon={faGithub} size="2x" pull="left"/>
                            </a>
                        </Card.Content>
                    </Card>
                </ProjectCards>
            </>
    )
}