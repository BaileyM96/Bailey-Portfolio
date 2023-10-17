import { ProjectContainer, ProjectHeader, ProjectCards } from "./Projects.styled";
import { Button, Card } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export default function Projects() {
    return(<>
                <ProjectContainer>
                    <ProjectHeader>Projects</ProjectHeader>
                </ProjectContainer>

                <ProjectCards>
                    <Card>
                        <Card.Content>
                            <Card.Header>Highest Good Network</Card.Header>
                            <Card.Description>
                                A labor tracking software.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Link to={'/HighestGoodNetwork'}>
                                <Button>View</Button>
                            </Link>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>Overwatch Counter Pick</Card.Header>
                            <Card.Description>
                            Overwatch match-winning counter.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>View</Button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>React Weather Program</Card.Header>
                            <Card.Description>
                            All-location weather app.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>View</Button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>Love.Dev</Card.Header>
                            <Card.Description>
                                A dating app for developers by developers!
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>View</Button>
                        </Card.Content>
                    </Card>

                    <Card>
                        <Card.Content>
                            <Card.Header>BURNT</Card.Header>
                            <Card.Description>
                            Tailored workout plans for your lifestyle.
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button>View</Button>
                        </Card.Content>
                    </Card>
                </ProjectCards>
            </>
    )
}