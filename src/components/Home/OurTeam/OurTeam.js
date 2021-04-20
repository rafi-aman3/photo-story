import React from 'react';
import { Container, Row } from 'react-bootstrap';
import team1 from '../../../img/team1.jpg';
import team2 from '../../../img/team2.jpg';
import team3 from '../../../img/team3.jpg';
import TeamCard from '../TeamCard/TeamCard';

const teamData = [
    {
        id: 1,
        name: 'S. M. Shadman Ashraf ',
        title: 'Senior Photographer',
        img: team1
    },
    {
        id: 2,
        name: 'Minhaz A. Menon',
        title: 'Assistant Photographer',
        img: team2
    },
    {
        id: 3,
        name: 'Rasheduzzaman Rashed',
        title: 'Cinematographer',
        img: team3

    }
]

const OurTeam = () => {
    return (
        <section>
            <Container className="text-center mt-5">
                <h5>Our Team</h5>
                <Row className="d-flex justify-content-center align-items-center">
                    {
                        teamData.map(team => <TeamCard key={team.id} team={team}></TeamCard>)
                    }

                </Row>
            </Container>
        </section>
    );
};

export default OurTeam;